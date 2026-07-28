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
const GITHUB_USERNAME = "andreibarbuceanu";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

async function fetchRepositoryCommits(
  repo: Repository
): Promise<DisplayCommit[]> {
  const repoUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=5`;

  try {
    const response = await fetch(repoUrl);

    if (!response.ok) {
      return [];
    }

    const commitData: CommitData[] = await response.json();

    return commitData.map((commit) => ({
      repo: repo.name,
      message: commit.commit.message,
      date: commit.commit.author.date,
    }));
  } catch {
    return [];
  }
}

function saveCommitsToCache(commits: DisplayCommit[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(commits));
  } catch {
    return;
  }
}

function getCommitsFromCache(): DisplayCommit[] {
  try {
    const cachedCommits = localStorage.getItem(CACHE_KEY);

    if (!cachedCommits) {
      return [];
    }

    return JSON.parse(cachedCommits) as DisplayCommit[];
  } catch {
    return [];
  }
}

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

        const reposResponse = await fetch(`${GITHUB_API_URL}/repos`);

        if (!reposResponse.ok) {
          throw new Error(`GitHub API error: ${reposResponse.status}`);
        }

        const repos: Repository[] = await reposResponse.json();
        const commitsByRepository = await Promise.all(
          repos.map(fetchRepositoryCommits)
        );
        const allCommits = commitsByRepository.flat();

        const sortedCommits = allCommits
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10);

        setCommits(sortedCommits);
        saveCommitsToCache(sortedCommits);
      } catch (fetchError) {
        const errorMessage =
          fetchError instanceof Error
            ? fetchError.message
            : "Failed to fetch commits";

        const cachedCommits = getCommitsFromCache();

        if (cachedCommits.length > 0) {
          setCommits(cachedCommits);
          setShowingCached(true);
          setError(null);
          return;
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
        <h2>Recent GitHub Activity</h2>
        <p>A snapshot of my latest work across public repositories.</p>

        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-btn"
        >
          View GitHub Profile
        </a>
      </div>

      {showingCached && (
        <p className="commits-loading">
          Showing cached GitHub activity because the GitHub API is currently
          unavailable.
        </p>
      )}

      {loading && <p className="commits-loading">Loading commits...</p>}

      {error && !showingCached && (
        <p className="commits-error">Error: {error}</p>
      )}

      {!loading && !error && commits.length > 0 && (
        <div className="commits-list">
          {commits.map((commit, index) => (
            <div
              key={`${commit.repo}-${commit.date}-${index}`}
              className="commit-item"
            >
              <div className="commit-header">
                <span className="commit-repo">{commit.repo}</span>
                <span className="commit-date">
                  {new Date(commit.date).toLocaleDateString()}
                </span>
              </div>
              <p className="commit-message">{commit.message}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && commits.length === 0 && (
        <p className="commits-empty">No recent commits found.</p>
      )}
    </section>
  );
}

export default GitHubCommits;
