// Write a function to Replace parameters in url

const replaceParamsInUrl = (url, replacements) => {
  return replacements.reduce(
    (acc, replacement) => acc.replace(":" + replacement.from, replacement.to),
    url
  );
};

const initialUrl = "/posts/:postId/comments/:commentId";

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);
console.log(resultUrl);
