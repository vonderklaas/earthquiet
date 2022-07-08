const readingTime = (topicTextLength: string) => {
  const wordsPerMinute = 265;
  const words = topicTextLength.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
};

export default readingTime;
