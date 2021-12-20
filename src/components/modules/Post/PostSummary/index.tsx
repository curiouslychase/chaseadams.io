import Link from "next/link";

import type { PostMeta, Tag as TagType } from "~/lib/posts/types";

export const PostSummary = ({ post }: { post: PostMeta }) => {
  return (
    <article
      className="group bg-slate-200 dark:bg-slate-900 hover:bg-blue-700 flex flex-col flex-1 group hover:ring-2 hover:ring-blue-500 dark:hover:ring-blue-800 p-5 rounded-lg transition hover:scale-105"
      key={post.id}
    >
      <div className="pb-2 text-sm text-slate-500 group-hover:text-slate-300 dark:text-slate-400">
        Posted on <time dateTime={post.date}>{post.date} </time>
      </div>
      <h3>
        <Link href={`/posts/${post.slug}`}>
          <a className="block font-bold text-2xl text-blue-600 group-hover:text-slate-50 hover:text-white dark:text-slate-300 dark:group-hover:text-blue-400 pb-5">
            {post.title}
          </a>
        </Link>
      </h3>
      <div className="pb-5 text-md text-slate-600 group-hover:text-slate-200 dark:text-slate-300">
        {post.description}
      </div>
      {post.tags?.length ? <Tags tags={post.tags} /> : null}
    </article>
  );
};

const Tags = ({ tags }: { tags: Array<TagType> }) => {
  return (
    <div className="text-sm pt-1 m-b-start-auto">
      {tags?.map((tag, idx) => (
        <span key={tag.slug}>
          <Tag tag={tag} />
          {tags && idx < tags?.length - 1 ? ", " : ""}
        </span>
      ))}
    </div>
  );
};

const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <span key={tag.slug}>
      <Link href={tag.slug}>
        <a className="group-hover:text-slate-100 dark:text-blue-200 dark:hover:text-blue-400">
          {tag.text}
        </a>
      </Link>
    </span>
  );
};
