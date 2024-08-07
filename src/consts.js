import { DELETE_COMMENT_URL, DELETE_POST_URL, DELETE_USER_URL } from "./URLS";
import { commentAction } from "./store/commentSlice";
import { postAction } from "./store/postSlice";
import { userAction } from "./store/userSlice";

export const homePageTitle = "Welcome to my Blog";
export const homePageSubTitle =
  "Here you'll find a variety of articles and tutorials on topics such as web development, software engineering, and programming languages.";
export const authPageSubTitle =
  "This is a demo project. You can sign in with your email and password";

export const formikValuesSingUp = [
  { name: "userName", lable: "User Name", type: "text" },
  { name: "email", lable: "Email", type: "text" },
  { name: "password", lable: "Password", type: "password" },
];
export const formikValuesSingIn = [
  { name: "email", lable: "Email", type: "text" },
  { name: "password", lable: "Password", type: "password" },
];
export const optionsCategory = ["", "java", "javaScript", "C", "C++", "React"];
export const optionsSort = ["Latest", "Oldest"];

export const recentUsers = [
  { userImage: "", userName: "ran" },
  { userImage: "", userName: "ran2" },
  { userImage: "", userName: "ran3" },
  { userImage: "", userName: "ran4" },
];
export const recentComments = [
  {
    comment: "https://deosa3hr.dc-ratingen.de:8121/login#!/login -- ACC2",
    likes: 2,
  },
  {
    comment:
      "citrix desktop: https://desh.caas.vodafone.com/logon/LogonPoint/tmindex.html",
    likes: 3,
  },
  {
    comment:
      "load file ogsearch approximatch: amsearch-support/systems/MainSystem/workdir/LoadFileTmp.txt",
    likes: 1,
  },
  {
    comment:
      "load file ogsearch approximatch: amsearch-support/systems/MainSystem/workdir/LoadFileTmp.txt",
    likes: 7,
  },
  {
    comment:
      "load file ogsearch approximatch: amsearch-support/systems/MainSystem/workdir/LoadFileTmp.txt",
    likes: 7,
  },
];
export const comments = [
  {
    dataUpdated: "22/12/2023",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    likes: 4,
    postId: "1234",
    userId: "2321",
  },
  {
    dataUpdated: "22/12/2023",
    content: "Nice Job!",
    likes: 4,
    postId: "12343",
    userId: "23521",
  },
  {
    dataUpdated: "22/12/2023",
    content: "Nice Job!",
    likes: 4,
    postId: "12384",
    userId: "23021",
  },
  {
    dataUpdated: "22/12/2023",
    content: "Nice Job!",
    likes: 4,
    postId: "121234",
    userId: "234421",
  },
  {
    dataUpdated: "22/12/2023",
    content: "Nice Job!",
    likes: 4,
    postId: "123334",
    userId: "23121221",
  },
];
export const usersData = [
  {
    dataCreated: "22/12/2023",
    userImage: "",
    UserName: "ran",
    Email: "123334",
    Admin: "23121221",
  },
];
export const postsData = [
  {
    dataUpdated: "22/12/2023",
    postImage: "",
    postTitle: "ran",
    category: "123334",
    edit: "Edit",
  },
];
export const postsFields = ["updatedAt", "image", "title", "category", "edit"];
export const usersFields = [
  "createdAt",
  "image",
  "userName",
  "email",
  "isAdmin",
];
export const commentsFields = [
  "updatedAt",
  "content",
  "numberOfLikes",
  "postId",
  "userId",
];
export const commentPage = [
  "Date Updated",
  "Content",
  "Likes",
  "Post ID",
  "User ID",

  "DELETE",
];

export const userPage = [
  "Date Created",
  "User Image",

  "UserName",
  "Email",
  "Admin",
  "DELETE",
];
export const postsPage = [
  "Date Created",
  "Post Image",

  "Post Title",
  "Category",

  "Edit",
  "DELETE",
];
export const urlMap = {
  comments: DELETE_COMMENT_URL,
  posts: DELETE_POST_URL,
  users: DELETE_USER_URL,
};
export const actionMapping = {
  comments: commentAction.setDashBoardComments,
  users: userAction.setUsers,
  posts: postAction.setDashBoardPosts,
  //posts: postAction.setDashBoardposts,
  // Add other slices and their corresponding actions here
};
export const globalActionMapping = {
  setDashBoardComments: commentAction.setDashBoardComments,
  setPostComments: commentAction.setPostComments,
  setUsers: userAction.setUsers,
  setUser: userAction.setUser,
  removeUser: userAction.removeUser,
  setDashBoardPosts: postAction.setDashBoardPosts,
  setPostSearch: postAction.setPostSearch,
  //posts: postAction.setDashBoardposts,
  // Add other slices and their corresponding actions here
};
