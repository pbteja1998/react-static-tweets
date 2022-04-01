import React from 'react'
// import dynamic from 'next/dynamic' // TODO
import { useTweet } from './tweet/tweet'

export const Img = ({ width, height, src, ...p }) => {
  const tweet = useTweet()
  const tweetUrl = `https://twitter.com/${tweet.username}/status/${tweet.id}`

  return (
    <details className='static-tweet-details'>
      <summary
        className='static-tweet-summary'
        style={{
          paddingBottom: '0%' // `${(height / width) * 100 || 0}%`
        }}
      >
        <a
          href={tweetUrl}
          className='avatar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img {...p} src={`${src}&name=small`} />
        </a>
      </summary>
    </details>
  )
}
