import DefaultLayout from "~/containers/layouts/Default";
export default function Custom404() {
  return (
    <DefaultLayout>
      <h1>Whoops! Page can't be found.</h1>
      <p>
        It looks like you're trying to access a page that can't be found. This
        could be because the URL used to get here is incorrect.
      </p>
      <p>
        Let me know you stumbled onto a broken link on{" "}
        <a href="https://twitter.com/chaseadamsio">Twitter</a>!
      </p>
    </DefaultLayout>
  );
}
