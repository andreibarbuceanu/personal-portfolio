import "./CommitItem.css";

type CommitItemProps = {
  repo: string;
  message: string;
  date: string;
};

function CommitItem({ repo, message, date }: CommitItemProps) {
  return (
    <article className="commit-item">
      <div className="commit-header">
        <span className="commit-repo">{repo}</span>
        <time className="commit-date" dateTime={date}>
          {new Date(date).toLocaleDateString()}
        </time>
      </div>

      <p className="commit-message">{message}</p>
    </article>
  );
}

export default CommitItem;
