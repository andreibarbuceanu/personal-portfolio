import { useState, useEffect } from "react";
import "./GitHubCommits.css";

interface CommitData {
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
}

interface Repository {
  name: string;
}

interface DisplayCommit {
  repo: string;
  message: string;
  date: string;
}

const CACHE_KEY = "github_commits_cache";

function GitHubCommits() {
  const [commits, setCommits] = useState<DisplayCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showingCached, setShowingCached] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true);
        setError(null);
        setShowingCached(false);

        const reposResponse = await fetch("https://api.github.com/users/andreibarbuceanu/repos");

        if (!reposResponse.ok) throw new Error(`GitHub API error: ${reposResponse.status}`);

        const repos: Repository[] = await reposResponse.json();
        const allCommits: DisplayCommit[] = [];

        for (const repo of repos) {
          const repoUrl = `https://api.github.com/repos/andreibarbuceanu/${repo.name}/commits`;

          try {
            const commitsResponse = await fetch(repoUrl);
            if (!commitsResponse.ok) continue;
            const commitData: CommitData[] = await commitsResponse.json();
            const repoCommits = commitData.map((commit) => ({
              repo: repo.name,
              message: commit.commit.message,
              date: commit.commit.author.date,
            }));
            allCommits.push(...repoCommits);
          } catch {
            // ignore
          }
        }

        const sortedCommits = allCommits
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10);

        setCommits(sortedCommits);

        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(sortedCommits));
        } catch {
          // ignore
        }
      } catch (fetchError) {
        const errorMessage = fetchError instanceof Error ? fetchError.message : "Failed to fetch commits";

        try {
          const cachedCommits = localStorage.getItem(CACHE_KEY);
          if (cachedCommits) {
            const parsedCommits: DisplayCommit[] = JSON.parse(cachedCommits);
            if (parsedCommits.length > 0) {
              setCommits(parsedCommits);
              setShowingCached(true);
              setError(null);
              return;
            }
          }
        } catch {
          // ignore
        }

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  return (
    <section id="commits" className="commits-section">
      <div className="commits-header">
        <h2>Latest GitHub Activity</h2>
        <p>Latest commits from my public repositories.</p>

        <a href="https://github.com/andreibarbuceanu" target="_blank" rel="noopener noreferrer" className="github-profile-btn">
          View GitHub Profile
        </a>
      </div>

      {showingCached && <p className="commits-loading">Showing cached GitHub activity because the GitHub API is currently unavailable.</p>}

      {loading && <p className="commits-loading">Loading commits...</p>}

      {error && !showingCached && <p className="commits-error">Error: {error}</p>}

      {!loading && !error && commits.length > 0 && (
        <div className="commits-list">
          {commits.map((commit, index) => (
            <div key={`${commit.repo}-${commit.date}-${index}`} className="commit-item">
              <div className="commit-header">
                <span className="commit-repo">{commit.repo}</span>
                <span className="commit-date">{new Date(commit.date).toLocaleDateString()}</span>
              </div>
              <p className="commit-message">{commit.message}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && commits.length === 0 && <p className="commits-empty">No recent commits found.</p>}
    </section>
  );
}

export default GitHubCommits;
