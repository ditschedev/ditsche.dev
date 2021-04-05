import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const InternalLink = ({href, children, exact = true}) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (exact && router.pathname === href) {
    className = `${className} text-coal dark:text-white sm:border-t sm:border-primary-400`
  } else if (!exact && router.pathname.startsWith(href)) {
    className = `${className} text-coal dark:text-white sm:border-t sm:border-primary-400`
  } else {
    className = `${className} text-gray-600 dark:text-gray-400`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default function MenuItem ({ href, children, external = false, exact = true }) {
  if(external) {
    return (
      <a href={href} className="p-1 px-2 sm:p-4 text-gray-600 dark:text-gray-400">
        {children}
      </a>
    )
  }

  return (
    <InternalLink href={href} exact={exact}>
      <a className="p-1 px-2 sm:p-4">
        {children}
      </a>
    </InternalLink>
  )
}