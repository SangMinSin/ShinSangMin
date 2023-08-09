// 예시로 가상의 사용자 아이디 배열을 만들어 사용합니다.
const onlineUsers = ['user1', 'user2', 'user3', 'user4', 'user5'];

// 페이지가 로드되면 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
  const onlineUsersList = document.getElementById('online-users');

  // 가상의 사용자 아이디 배열을 기반으로 동적으로 목록을 생성합니다.
  onlineUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    onlineUsersList.appendChild(listItem);
  });
});

/* 이미지 슬라이드를 위한 스타일 */
.slideshow {
  max-width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.slideshow img {
  width: 100%;
  height: auto;
  display: inline-block;
  opacity: 0;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.slideshow img.active {
  opacity: 1;
}

// 게시글을 추가하는 기능
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-btn');
  const postContainer = document.getElementById('post-container');

  submitBtn.addEventListener('click', () => {
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    if (postTitle.trim() === '' || postContent.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    const postElement = createPostElement(postTitle, postContent);
    postContainer.appendChild(postElement);

    // 입력 폼 비우기
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
  });

  function createPostElement(title, content) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    return postElement;
  }
});

// ... (기존 코드와 동일) ...

// 해당 일정을 alert로 보여주는 함수
function showAlert(schedule) {
  alert(schedule);
}