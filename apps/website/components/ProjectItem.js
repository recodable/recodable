export default function ProjectItem({ reverse, ...forwardedProps }) {
  const children = [
    <ProjectDetails {...forwardedProps} />,
    <ProjectIllustration
      className="border shadow-lg hidden lg:block"
      {...forwardedProps}
    />,
  ]

  if (reverse) children.reverse()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 p-8 lg:rounded-lg">
      <ProjectIllustration className="lg:hidden" {...forwardedProps} />

      {children}
    </div>
  )
}

function ProjectDetails({ title, description, links, url, extras }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-baseline">
        <a href={url} target="_blank">
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700">
            {title}
          </h3>
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
  )
}

function ProjectIllustration({ url, className = '', ...forwardedProps }) {
  return (
    <a
      href={url}
      target="_blank"
      className={`w-full rounded-lg overflow-hidden ${className}`}
    >
      <img {...forwardedProps} />
    </a>
  )
}
