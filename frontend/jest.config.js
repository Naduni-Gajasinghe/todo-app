export default {
  transformIgnorePatterns: [
    "node_modules/(?!axios)/", // 👈 transform axios as well
  ],
  testEnvironment: "jsdom",
};
