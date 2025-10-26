module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!axios)/", // ✅ transform axios too
  ],
  testEnvironment: "jsdom",
};
