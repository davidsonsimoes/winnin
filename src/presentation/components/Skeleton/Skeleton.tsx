import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonGrid = () => {
  return (
    <div>
      <FadingLoaderCard1 />
      <FadingLoaderCard2 />
      <FadingLoaderCard3 />
      <FadingLoaderCard4 />
      <FadingLoaderCard5 />
    </div>
  )
}

const FadingLoaderCard1 = () => {
  return (
    <ContentLoader
      width={'100%'}
      height={100}
      backgroundColor="#ababab"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="26%" height="15" />
      <rect x="120" y="39" rx="5" ry="5" width="50%" height="9" />
      <rect x="120" y="75" rx="2" ry="2" width="30%" height="6" />
      <rect x="20" y="10" rx="0" ry="0" width="77" height="77" />
    </ContentLoader>
  )
}

const FadingLoaderCard2 = () => {
  return (
    <ContentLoader
      width={'100%'}
      height={100}
      backgroundColor="#bfbfbf"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="26%" height="15" />
      <rect x="120" y="39" rx="5" ry="5" width="50%" height="9" />
      <rect x="120" y="75" rx="2" ry="2" width="30%" height="6" />
      <rect x="20" y="10" rx="0" ry="0" width="77" height="77" />
    </ContentLoader>
  )
}

const FadingLoaderCard3 = () => {
  return (
    <ContentLoader
      width={'100%'}
      height={100}
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="26%" height="15" />
      <rect x="120" y="39" rx="5" ry="5" width="50%" height="9" />
      <rect x="120" y="75" rx="2" ry="2" width="30%" height="6" />
      <rect x="20" y="10" rx="0" ry="0" width="77" height="77" />
    </ContentLoader>
  )
}

const FadingLoaderCard4 = () => {
  return (
    <ContentLoader
      width={'100%'}
      height={100}
      backgroundColor="#ececec"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="26%" height="15" />
      <rect x="120" y="39" rx="5" ry="5" width="50%" height="9" />
      <rect x="120" y="75" rx="2" ry="2" width="30%" height="6" />
      <rect x="20" y="10" rx="0" ry="0" width="77" height="77" />
    </ContentLoader>
  )
}

const FadingLoaderCard5 = () => {
  return (
    <ContentLoader
      width={'100%'}
      height={100}
      backgroundColor="#f7f7f7"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="26%" height="15" />
      <rect x="120" y="39" rx="5" ry="5" width="50%" height="9" />
      <rect x="120" y="75" rx="2" ry="2" width="30%" height="6" />
      <rect x="20" y="10" rx="0" ry="0" width="77" height="77" />
    </ContentLoader>
  )
}

export default SkeletonGrid