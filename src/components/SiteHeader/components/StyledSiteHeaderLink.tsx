import Link, { LinkProps } from "next/link";

export const StyledSiteHeaderLink = ({
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <Link {...props}>
      <a
        className={`underlined py-1 text-slate-300 hover:text-blue-400 transition-all`}
      >
        {children}
      </a>
    </Link>
  );
};
