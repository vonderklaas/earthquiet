const readingTime = (issueTextLength: string) => {
  const wordsPerMinute = 265;
  const words = issueTextLength.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
};

export default readingTime;
