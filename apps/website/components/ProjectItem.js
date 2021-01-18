export default function ProjectItem({ reverse, ...forwardedProps }) {
  const children = [
    <ProjectDetails {...forwardedProps} />,
    <ProjectIllustration {...forwardedProps} />,
  ];

  if (reverse) children.reverse();

  return (
    <div className="grid grid-cols-2 gap-12 bg-gray-50 p-8 rounded-lg">
      {children}
    </div>
  );
}

function ProjectDetails({ title, description, links, url, extras }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-baseline">
        <a href={url} target="_blank">
          <h3 className="text-3xl font-semibold text-gray-700">{title}</h3>
        </a>

        <div>{!!links && links.map((link) => <>{link}</>)}</div>
      </div>

      <a href={url} target="_blank">
        <p className="text-gray-400">{description}</p>
      </a>

      <div className="mt-auto flex items-center gap-6 py-2">
        {!!extras && extras.map((link) => <>{link}</>)}
      </div>
    </div>
  );
}

function ProjectIllustration({ url, ...forwardedProps }) {
  return (
    <a
      href={url}
      target="_blank"
      className="w-full border shadow-lg rounded-lg overflow-hidden"
    >
      <img {...forwardedProps} />
    </a>
  );
}
