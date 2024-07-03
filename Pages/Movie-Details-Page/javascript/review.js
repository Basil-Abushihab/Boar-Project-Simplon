import {
    push,
    auth, //the same getAuth(app) but this in variable
    database, //the same getDatabase(app) but this in variable
    reference, //the same ref but this in variable
    addData, //the same set but this in variable
    retrieveData, //the same onValue but this in variable
    query,
  } from "../../../Firebase-config/firebase-config.js";
  
  import { getUserData } from "../../../Controllers/UserControllers/retrieveUser.js";
  
  function addComment(movieId, commentText) {
    const userId = JSON.parse(sessionStorage.getItem("currentUser"));
    if (!userId) {
        alert("You must be logged in to add a comment.");
        return;
    }
  
    const commentRef = reference(database, `Movies/${movieId}/comments`);
    const newCommentRef = push(commentRef);
    
    const comment = {
        text: commentText,
        userId: userId,
        // times: Date.now(),
    };
    console.log(comment.times);
    
    addData(newCommentRef, comment)
        .then(() => {
            alert("Comment added successfully.");
        })
        .catch((error) => {
            console.error("Error adding comment: ", error);
        });
  }
  
  document.getElementById("Review-Submit").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const commentText = document.getElementById("Review-Text-Field").value;
  
    const movieInfo = JSON.parse(sessionStorage.getItem("movie"));
    const movieId = movieInfo.movieID;
  
    addComment(movieId, commentText);
  });
  
  async function addCard(comment, commentId) {
    let commentGroup = document.querySelector('.commentsGroup');
    const currentUserId = JSON.parse(sessionStorage.getItem("currentUser"));
    let userdata = await getUserData(comment.userId);
  
    let commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
        <p class="CommenterName">${userdata.firstName}</p>
        <p>${comment.text}</p>
    `;
  
    if (comment.userId === currentUserId) {
        commentElement.innerHTML += `
            <button class="edit-comment" data-id="${commentId}">Edit</button>
            <button class="delete-comment" data-id="${commentId}">Delete</button>
        `;
    }
    
    commentGroup.appendChild(commentElement);
  
    if (comment.userId === currentUserId) {
        // Add event listeners for edit and delete buttons
        commentElement.querySelector('.edit-comment').addEventListener('click', editComment);
        commentElement.querySelector('.delete-comment').addEventListener('click', deleteComment);
    }
  }
  
  function loadComments(movieId) {
    const commentRef = reference(database, `Movies/${movieId}/comments`);
    retrieveData(commentRef, (snapshot) => {
        const commentGroup = document.querySelector('.commentsGroup');
        commentGroup.innerHTML = ""; 
        snapshot.forEach((childSnapshot) => {
            const comment = childSnapshot.val();
            const commentId = childSnapshot.key;
            addCard(comment, commentId);
        });
    });
  }
  
  function editComment(event) {
    const commentId = event.target.getAttribute('data-id');
    const movieInfo = JSON.parse(sessionStorage.getItem("movie"));
    const movieId = movieInfo.movieID;
    const newCommentText = prompt("Enter the new comment text:");
  
    if (newCommentText) {
        const commentRef = reference(database, `Movies/${movieId}/comments/${commentId}`);
        addData(commentRef, {
           text: newCommentText, 
           userId: JSON.parse(sessionStorage.getItem("currentUser")) })
            .then(() => {
                alert("Comment updated successfully.");
                loadComments(movieId);
            })
            .catch((error) => {
                console.error("Error updating comment: ", error);
            });
    }
  }
  
  function deleteComment(event) {
    const commentId = event.target.getAttribute('data-id');
    const movieInfo = JSON.parse(sessionStorage.getItem("movie"));
    const movieId = movieInfo.movieID;
    const commentRef = reference(database, `Movies/${movieId}/comments/${commentId}`);
  
    addData(commentRef, null)
        .then(() => {
            alert("Comment deleted successfully.");
            loadComments(movieId);
        })
        .catch((error) => {
            console.error("Error deleting comment: ", error);
        });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const movieInfo = JSON.parse(sessionStorage.getItem("movie"));
    const movieId = movieInfo.movieID;
  
    loadComments(movieId); 
  });
  