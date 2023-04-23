/* eslint-disable react/jsx-no-comment-textnodes */
export function CodeBlockHome() {
  return (
    <div className="flex flex-col gap-1 mt-20 text-lg">
      <span className="text-grayvs-500">
        // welcome to my portfolio, press Z
      </span>
      <span className="text-grayvs-500">
        // you can also see my projects on my Github page
      </span>
      <p className="text-grayvs-500">
        <span className="text-purplevs-500">const</span>{' '}
        <span className="text-greenvs-500">githubLink</span>
        <span className="text-white"> = </span>
        <a href="https://github.com/swxtz" className="text-pinkvs-500">
          “<span className="underline">https://github.com/swxtz</span>”
        </a>
      </p>
    </div>
  );
}
