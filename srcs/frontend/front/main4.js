let allUsers = [];

document.addEventListener("DOMContentLoaded", () => {
    const pages = {
        signIn: `
            <div class="main">
                <div class="border-up">
                    <img class="logo" src="images/Pongify_logo.png">
                    <h2>WELCOME</h2>
                    <p>Login with your 42 Network account or use your own email and password</p>
                </div>
                <div class="border-bottom">
                    <form id="login-form">
                        <input id="login-username" type="text" class="brd" placeholder="Username"><br>
                        <input id="login-password" type="password" class="brd" placeholder="Password">
                        <p class="error-msg" style="color: red;"></p>
                        <button class="btn" type="submit">Login</button>
                    </form>
                    <button class="btn2"><img src="images/42.png">Network</button>
                    <a href="#" id="go-to-sign-up">Create Account</a>
                </div>
            </div>
        `,
        signUp: `
            <div class="main">
                <div class="border-up">
                    <img class="logo" src="images/Pongify_logo.png">
                    <h2>WELCOME</h2>
                    <p>Login with your 42 Network account or use your own email and password</p>
                </div>
                <div class="border-bottom">
                    <form id="signup-form">
                        <input id="username" type="text" class="brd" placeholder="Username">
                        <input id="email" type="email" class="brd" placeholder="Email">
                        <input id="password" type="password" class="brd" placeholder="Password">
                        <input id="first_name" type="text" class="brd" placeholder="First name">
                        <input id="last_name" type="text" class="brd" placeholder="Last name">
                        <button class="btn" type="submit">Sign Up</button>
                    </form>
                    <button class="btn2"><img src="images/42.png">Network</button>
                </div>
            </div>
        `,
        dashboard: `
            <div class="main">
                <div class="header">
                    <img class="logo" src="images/Pongify_logo.png">
                    <div class="test">
                        <a href="#/dashboard" data-page="home" class="active">HOME</a>
                        <a href="#/profile" data-page="profile">PROFILE</a>
                        <a href="#/game" data-page="game">GAME</a>
                        <a href="" data-page="tournament">TOURNAMENT</a>
                        <a href="#/chat" data-page="chat">CHAT</a>
                        <a href="" data-page="settings">SETTINGS</a>
                    </div>
                </div>
                <div class="middle">
                    <div class="paragraph">
                        <h2>Classic Pong Modern Twist.</h2>
                        <p>"Pongify" is a reimagined version of the classic Pong game, bringing a 
                        fresh and engaging multiplayer experience. Compete with friends, join tournaments, 
                        and relive the nostalgia with enhanced graphics and smooth gameplay.</p>
                        <button class="start-playing-btn" id="startplay" >Start Playing</button>
                    </div>
                    <div>
                        <div class="friend-requests-container">
                            <h2 id="no-friend" style="display: block;">No friend requests found</h2>
                            <div id="friend-requests-list"></div>
                        </div>

                        <!-- Add Friends Button -->
                        <button class="f_img_l" id="add-friends-btn" type="button">Add Friends</button>
                        <!-- Search Bar (Initially Hidden) -->
                        <div id="search-bar-container" style="display: none;">
                            <input class="search_bar" type="text" id="search-bar" placeholder="Search friends...">
                            <div id="user-list-container"></div>
                        </div>
                        
                        <!-- Friends Button -->
                        <button class="f_img_l2" id="friends-btn" type="button">Friends</button>
                        <img class="f_img_last" src="dashboard img/FREINDLIST_041332.png">
                    </div>
                </div>
            </div>
        `,
        home: `
            <div class="play_local">
                <div class="btn">
                    <button type="button" onclick="location.href='game.html';">Play Local Game</button>
                </div>
                <img class="f_img" src="dashboard img/full_button.png">
            </div>
            <div class="btn2">
                <button type="button" onclick="location.href='game.html';">Play Online Game</button>
            </div>
            <img class="f_img" src="dashboard img/full_buton_2.png">
            <div>
                <!-- Add Friends Button -->
                <button class="f_img_l" id="add-friends-btn" type="button">Add Friends</button>
                <!-- Search Bar (Initially Hidden) -->
                <div id="search-bar-container" style="display: none;">
                    <input class="search_bar" type="text" id="search-bar" placeholder="Search friends...">
                </div>
                
                <!-- Friends Button -->
                <button class="f_img_l2" id="friends-btn" type="button">Friends</button>
                <img class="f_img_last" src="dashboard img/FREINDLIST_041332.png">
            </div>
        `,
        profile: `
            <div class="main">
                <div class="header">
                    <img class="logo" src="images/Pongify_logo.png">
                    <div class="test">
                        <a href="#/dashboard" data-page="home">HOME</a>
                        <a href="#/profile" data-page="profile" class="active">PROFILE</a>
                        <a href="#/game" data-page="game">GAME</a>
                        <a href="" data-page="tournament">TOURNAMENT</a>
                        <a href="#/chat" data-page="chat">CHAT</a>
                        <a href="" data-page="settings">SETTINGS</a>
                    </div>
                </div>
            <div class="profile-container">
                <div class="profile-info">
                    <img class="profile-border" src="profile imgs/main_profile_window.png">
                    <img class="p_img" id="profile-img" class="profile-img" src="profile images/luffy_snipper.jpg">
                    <h2 class="p_username" id="profile-username" class="profile-username">Username</h2>
                    <button class="edit_p" id="edit-p-btn" type="button">Edit Profile</button>
                    <button class="signout" id="signout-btn" type="button">Sign Out</button>
                </div>
                <div class="profile-stats">
                    <img class="stats-border wins" src="profile imgs/level_and_wins_window.png" alt="Wins">
                    <img class="stats-border level" src="profile imgs/level_and_wins_window.png" alt="Level">
                </div>
                <div class="match-history">
                    <img class="match-history-border" src="profile imgs/match_history_window.png" alt="Match History">
                </div>
            </div>
        `,
        game: `
            <div class="main">
                <div class="header">
                    <img class="logo" src="images/Pongify_logo.png">
                    <div class="test">
                        <a href="#/dashboard" data-page="home">HOME</a>
                        <a href="#/profile" data-page="profile">PROFILE</a>
                        <a href="#/game" data-page="game" class="active">GAME</a>
                        <a href="" data-page="tournament">TOURNAMENT</a>
                        <a href="#/chat" data-page="chat">CHAT</a>
                        <a href="" data-page="settings">SETTINGS</a>
                    </div>
                </div>
                <div class="game-container">
                    <canvas id="gamecanvas"></canvas>
                </div>
            </div>
        `,
        chat: `
            <div class="main">
                <div class="header">
                    <img class="logo" src="images/Pongify_logo.png">
                    <div class="test">
                        <a href="#/dashboard" data-page="home">HOME</a>
                        <a href="#/profile" data-page="profile">PROFILE</a>
                        <a href="#/game" data-page="game">GAME</a>
                        <a href="" data-page="tournament">TOURNAMENT</a>
                        <a href="#/chat" data-page="chat" class="active">CHAT</a>
                        <a href="" data-page="settings">SETTINGS</a>
                    </div>
                </div>
                <div class="border">
                <div class="app-container">
                    <div class="user-list">
                        <div class="user" onclick="switchConversation('user1')">
                            <div class="icon">
                                <img src="https://via.placeholder.com/40" alt="">
                            </div>
                            <div>User 1</div>
                        </div>
                        <div class="user" onclick="switchConversation('user2')">
                            <div class="icon">
                                <img src="https://via.placeholder.com/40" alt="">
                            </div>
                            <div>User 2</div>
                        </div>
                    </div>
                    <div class="chat-panel">
                        <div class="chat-header" id="chat-header">
                            Chat with User 1
                        </div>
                        <div class="chat-messages" id="chat-messages">
                            <!-- Messages will be displayed here -->
                        </div>
                        <div class="chat-input-container">
                            <input type="text" class="chat-input" id="chat-input" placeholder="Type a message...">
                            <div class="btn-container">
                                <button id="emoji-toggle-btn" class="emoji-toggle-btn">
                                    <img class="emoji" src="https://icons.iconarchive.com/icons/designbolts/emoji/512/Emoji-Blank-icon.png" alt="">
                                </button>
                            </div>                    
                            <div id="emojiPicker" class="emoji-picker">
                                <span onclick="addEmoji('😀')" class="emoji">😀</span>
                                <span onclick="addEmoji('😂')" class="emoji">😂</span>
                                <span onclick="addEmoji('❤️')" class="emoji">❤️</span>
                                <span onclick="addEmoji('🎉')" class="emoji">🎉</span>
                                <span onclick="addEmoji('😎')" class="emoji">😎</span>
                                <span onclick="addEmoji('😅')" class="emoji">😅</span>
                                <span onclick="addEmoji('😍')" class="emoji">😍</span>
                                <span onclick="addEmoji('🔥')" class="emoji">🔥</span>
                                <span onclick="addEmoji('🤔')" class="emoji">🤔</span>
                                <span onclick="addEmoji('🙌')" class="emoji">🙌</span>
                                <span onclick="addEmoji('🌟')" class="emoji">🌟</span>
                                <span onclick="addEmoji('🥳')" class="emoji">🥳</span>
                                <span onclick="addEmoji('🍆')" class="emoji">🍆</span>
                                <span onclick="addEmoji('🔥')" class="emoji">🔥</span>
                                <span onclick="addEmoji('💩')" class="emoji">💩</span>
                            </div>
                            <button id="send-btn" class="send-btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        `,
    };
    
    let token;
    let user_id;
    
    const hash = window.location.hash;
    console.log("Hash:", hash);
    if (hash.includes('?'))
    {
      const urlParams = new URLSearchParams(hash.split('?')[1]);
      token = urlParams.get('access_token');
      user_id = urlParams.get('user_id');
    
      if (token) {
        localStorage.setItem("authToken", token);
        navigateTo('#/dashboard');
        console.log("Access token from URL:", token);
      }
      if (user_id) {
        localStorage.setItem("user_id", user_id);
        console.log("User ID from URL:", user_id);
      }
    } else {
      token = localStorage.getItem("authToken");
      user_id = localStorage.getItem("user_id");
      console.log("No query parameters found. Using token from localStorage:", token);
    }
    // console.log("Access token from 42 Network:", token);
    // console.log("User ID from 42 Network:", user_id);
    // const token = localStorage.getItem("authToken");
    
    // console.log("Access token before:", token);

    if (token)
    {
        const currentHash = window.location.hash;
        // if (currentHash.startsWith("#/sign-in"))
        // {
        //     navigateTo('#/dashboard');
        // }
        navigateTo(currentHash);
    }

    console.log("Access token from 42 Network:", token);
    function preloadStylesheet(url) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }

    function loadCSS(fileName) {
        const existingLink = document.getElementById('dynamic-css');
        if (existingLink) existingLink.remove();

        const link = document.createElement('link');
        link.id = 'dynamic-css';
        link.rel = 'stylesheet';
        link.href = fileName;
        document.head.appendChild(link);
    }

    function navigateTo(route) {
        window.history.pushState({}, '', route); // This will change the URL
        renderPage(route); // Call renderPage after changing the URL
    }

    function setupSignOut() {
      const signOutBtn = document.getElementById("signout-btn");
      if (signOutBtn) {
        signOutBtn.addEventListener("click", () => {
          // Remove stored tokens and user data
          localStorage.removeItem("authToken");
          localStorage.removeItem("user_id");
          localStorage.removeItem("hasRedirected"); // if used
          token = "";
          user_id = "";

          console.log(localStorage.getItem("authToken"));
          console.log(localStorage.getItem("user_id"));
          console.log(localStorage.getItem("hasRedirected"));
          // Optionally, you can clear all localStorage data if that's acceptable:
          localStorage.clear();

          // Redirect to the sign-in page
          navigateTo('#/sign-in');
        });
      }
    }

    function setupDashboard() {
        const startplaybutton = document.getElementById("startplay");
        if (startplaybutton) {
            startplaybutton.addEventListener('click', () => {
                console.log("Start Playing button clicked!");
                navigateTo('#/game');
            });
        } else {
            console.error("Startplay button not found after rendering dashboard!");
        }
    }
    function renderPage(route) {
        const app = document.getElementById('app');
        // const contentArea = document.getElementById('content-area');

        switch (route) {
            case '#/sign-in':
                // window.location.hash = '#/sign-in';
                app.innerHTML = pages.signIn;
                loadCSS('style2.css');
                setupSignIn();
                break;
            case '#/sign-up':
                // window.location.hash = '#/sign-up';
                app.innerHTML = pages.signUp;
                loadCSS('sign-up-page.css');
                setupSignUp();
                break;
            case '#/dashboard':
                // window.location.hash = '#/dashboard';
                app.innerHTML = pages.dashboard;
                loadCSS('dashboard.css');
                initializeHomeFunctionality();
                loadPendingFriendRequests();
                setupDashboard();
                // loadProfileInfo();
                break;
            case '#/home':
                app.innerHTML = pages.home;
                break;
            case '#/profile':
                // window.location.hash = '#/profile';
                app.innerHTML = pages.profile;
                loadCSS('profile.css');
                loadProfileInfo();
                initializeProfileEdit();
                setupSignOut();
                break;
            case '#/game':
                window.location.hash = '#/game';
                app.innerHTML = pages.game;
                loadCSS('styleGame.css');
                // const gamecanvas = document.createElement('canvas');
                // gamecanvas.id = 'gamecanvas';
                // document.body.appendChild(gamecanvas);
                const gameScript = document.createElement('script');
                gameScript.src = './game.js';
                document.body.appendChild(gameScript);
                const backgroundAnimationScript = document.createElement('script');
                backgroundAnimationScript.src = './backgroundAnimation.js';
                document.body.appendChild(backgroundAnimationScript);
                break;
            case '#/chat':
                window.location.hash = '#/chat';
                app.innerHTML = pages.chat;
                loadCSS('chat.css');
                initializechatFunctionality();
                break;
            default:
                app.innerHTML = pages.signIn;
                loadCSS('style2.css');
                setupSignIn();
                break;
            }
        }
        
        function setupSignIn() 
        {
        const loginForm = document.getElementById('login-form');
        const goToSignUp = document.getElementById('go-to-sign-up');
        const errorMsg = document.querySelector('.error-msg');
        const btn2 = document.querySelector('.btn2');

        goToSignUp.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('#/sign-up');
        });


        if (btn2) 
        {
            console.log(token);
            btn2.addEventListener('click', async () => {
                try {
                    window.location.href = 'http://127.0.0.1:8000/42_login/';
                    const params = new URLSearchParams(window.location.search);
                    const token = params.get('access_token');
                    if (token) {
                        localStorage.setItem('authToken', token);
                        console.log("Access token stored in localStorage:", token);
                        window.history.replaceState({}, document.title, window.location.pathname);
                    } else {
                        console.log("No access token found in URL.");
                    }
                } catch (error) {
                    console.error('Error during 42 Network login:', error);
                    alert('An error occurred. Please try again.');
                }
            });
        }

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.querySelector('input[placeholder="Username"]').value.trim();
            const password = document.querySelector('input[placeholder="Password"]').value.trim();
            const errorMsg = document.querySelector('.error-msg');
            
            // Clear any previous error message
            errorMsg.style.display = 'none';
            errorMsg.textContent = '';
            
            if (!username || !password) {
                errorMsg.style.display = 'block';
                errorMsg.textContent = 'Username and password are required!';
                return;
            }
            
            try {
                console.log('Sending payload:', { username, password });
                const response = await fetch('http://127.0.0.1:8000/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                if (response.ok) 
                {
                    const result = await response.json();
                    localStorage.setItem('authToken', result.data.access);
                    navigateTo('#/dashboard');
                }
                else 
                {
                    const errorData = await response.json();
                    errorMsg.style.display = 'block';
                    errorMsg.textContent = errorData.error || 'Invalid username or password';
                }
            } catch (error) {
                console.error('Error during login:', error);
                errorMsg.style.display = 'block';
                errorMsg.textContent = 'Something went wrong. Please try again later.';
            }
        });
    }

    function setupSignUp() 
    {
        const signupForm = document.getElementById('signup-form');
        const btn2 = document.querySelector('.btn2');

        if(btn2)
        {
            btn2.addEventListener('click', async () => {
                try {
                    // Redirect the user to the 42 login endpoint
                    window.location.href = 'http://127.0.0.1:8000/42_login/';
            
                    // Check for the access token in the URL after redirect
                    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
                    const token = urlParams.get('access_token');
                    // console.log(urlParams)
                    console.log("Access token from 42 Network:", token); 
                    if (token)
                    {
                        // Save token to localStorage
                        localStorage.setItem('authToken', token);
                        console.log("Access token stored in localStorage:", token);
            
                        // Optionally remove query parameters to clean the URL
                        window.history.replaceState({}, document.title, window.location.pathname);
                        // navigateTo('#/dashboard'); 

                        //working here...
                    }
                    else 
                    {
                        console.log("No access token found in URL.");
                    }
                } catch (error) {
                    console.error('Error during 42 Network login:', error);
                    alert('An error occurred. Please try again.');
                }
            });
        }
        
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // const username = document.getElementById('username').value.trim();
            // const email = document.getElementById('email').value.trim();
            // const password = document.getElementById('password').value.trim();
            // const first_name = document.getElementById('first_name').value.trim();
            // const last_name = document.getElementById('last_name').value.trim();
            const formData = {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value
            };
            // console.log(formData);

            // console.log('Sending payload:', { username, email, password, first_name, last_name });
            try {
                const response = await fetch('http://127.0.0.1:8000/register/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    navigateTo('#/sign-in');
                } else {
                    const errorData = await response.json();
                    alert(errorData.error || 'Sign-up failed');
                }
            } catch (error) {
                console.error('Error during sign-up:', error);
                alert('An error occurred. Please try again.');
            }
        });
        
    }
    localStorage.setItem("authToken", token);
    console.log("Token set in localStorage:", localStorage.getItem("authToken"));
    
    async function loadProfileInfo() {
        try {

            const access_token = localStorage.getItem('authToken');
            // if (!token) return;
            if (!access_token) 
            {
                console.log("No access token found in localStorage." , {access_token});
                return;
            }
            const response = await fetch('http://127.0.0.1:8000/profile/', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/vnd.api+json',
                },
            });
            console.log('Response Headers:', response.headers);
            
            if (response.ok)
            {
                // const data = await response.json();
                const result = await response.json();
                const profileData = result.data.attributes;
                // document.getElementById('profile-img').src = data.image?.link || 'default-avatar.png';
                // document.getElementById('profile-username').innerText = data.login || 'Unknown User';
                document.getElementById('profile-img').src = profileData.avatar || 'default-avatar.png';
                document.getElementById('profile-username').innerText = profileData.username || 'Unknown User';
            }
        } catch (error) {
            console.error('Error loading profile info:', error);
        }
    }

    async function initializeHomeFunctionality() {
        const addFriendsButton = document.getElementById("add-friends-btn");
        const friendsButton = document.getElementById("friends-btn");
        const searchBarContainer = document.getElementById("search-bar-container");
        const searchInput = document.getElementById("search-bar");
        const friendRequestsContainer = document.querySelector(".friend-requests-container");
    
        // Function to hide all sections except the one being shown
        function hideAllExcept(exceptElement) {
            const elementsToHide = [
                searchBarContainer,
                friendRequestsContainer,
                document.getElementById("dynamic-friend-list")
            ];
            elementsToHide.forEach(element => {
                if (element && element !== exceptElement) {
                    if (element.id === "dynamic-friend-list" && element) {
                        element.remove(); // Remove dynamic friend list if it exists
                    } else {
                        element.style.display = "none"; // Hide other containers
                    }
                }
            });
        }
    
        // Function to restore pending requests as default
        function showPendingRequests() {
            hideAllExcept(friendRequestsContainer);
            friendRequestsContainer.style.display = "block";
            loadPendingFriendRequests(); // Refresh the list
        }
    
        // Load pending requests on initial dashboard load
        if (friendRequestsContainer) {
            friendRequestsContainer.style.display = "block";
            loadPendingFriendRequests();
        }
    
        // Add Friends Button: Toggle search bar, default to pending requests when off
        if (addFriendsButton && searchBarContainer) {
            addFriendsButton.addEventListener("click", () => {
                if (searchBarContainer.style.display === "none" || searchBarContainer.style.display === "") {
                    hideAllExcept(searchBarContainer);
                    searchBarContainer.style.display = "block";
                    fetchAndDisplayUsers();
                } else {
                    searchBarContainer.style.display = "none";
                    showPendingRequests(); // Restore pending requests when hiding search bar
                }
            });
        }
    
        // Friends Button: Toggle friend list, default to pending requests when off
        if (friendsButton) {
            friendsButton.addEventListener("click", () => {
                const existingFriendList = document.getElementById("dynamic-friend-list");
                if (!existingFriendList) {
                    hideAllExcept(null);
                    fetchAndDisplayFriends(friendsButton);
                } else {
                    existingFriendList.remove();
                    showPendingRequests(); // Restore pending requests when hiding friend list
                }
            });
        }
    
        // Search Input: Keep search bar visible while typing
        if (searchInput) {
            searchInput.addEventListener("keyup", async () => {
                const query = searchInput.value.trim();
                if (!query) {
                    fetchAndDisplayUsers();
                } else {
                    await searchAndDisplayUsers(query);
                }
            });
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          // Pick a random index from 0 to i
          const j = Math.floor(Math.random() * (i + 1));
          // Swap elements array[i] and array[j]
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      async function sendFriendRequest(receiverId) {
        try {
            console.log("Sending friend request to user ID:", receiverId);
            console.log("Token:", localStorage.getItem("authToken"));
            const response = await fetch(`http://127.0.0.1:8000/friends/send/${receiverId}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("authToken")}`
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Error: ${JSON.stringify(errorData)}`);
                alert(`Error: ${errorData.message || "Failed to send friend request"}`);
                return;
            }

            const data = await response.json();
            alert(`Success: ${data.message || "Friend request sent successfully!"}`);
        } catch (error) {
            console.error("Error sending friend request:", error);
            alert("An unexpected error occurred.");
        }
    }

    // Add these helper functions after `loadPendingFriendRequests`
async function acceptFriendRequest(requestId) {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`http://127.0.0.1:8000/friends/accept/${requestId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        alert("Friend request accepted!");
        // Reload the friend requests to update the UI
        loadPendingFriendRequests();
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to accept friend request");
      }
    } catch (error) {
      console.error("Error accepting friend request:", error);
      alert("An error occurred while accepting the friend request.");
    }
  }
  
  async function rejectFriendRequest(requestId) {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`http://127.0.0.1:8000/friends/reject/${requestId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        alert("Friend request rejected!");
        // Reload the friend requests to update the UI
        loadPendingFriendRequests();
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to reject friend request");
      }
    } catch (error) {
      console.error("Error rejecting friend request:", error);
      alert("An error occurred while rejecting the friend request.");
    }
  }
  
  // Replace your existing `loadPendingFriendRequests` function with this:
    async function loadPendingFriendRequests() {
      try {
        const response = await fetch("http://127.0.0.1:8000/friends/pending/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
      
        if (!response.ok) {
          console.error("Failed to fetch pending friend requests. Status:", response.status);
          return;
        }
      
        const data = await response.json();
        console.log("Pending friend requests API response:", data);
      
        let pendingList = [];
        if (data.data && Array.isArray(data.data)) {
          pendingList = data.data.map(item => Object.assign({}, item.attributes, { id: item.id }));
        } else {
          console.error("Unexpected response format for pending friend requests:", data);
          return;
        }
      
        const noFriendElem = document.getElementById("no-friend");
        const friendRequestsList = document.getElementById("friend-requests-list");
        friendRequestsList.innerHTML = "";
      
        if (pendingList.length === 0) {
            noFriendElem.style.display = "block"; // Show "No friend requests found"
            friendRequestsList.style.display = "none"; // Hide list container
        } else {
            noFriendElem.style.display = "none"; // Hide message
            friendRequestsList.style.display = "block"; // Show list
            pendingList.forEach(request => {
                const requestDiv = document.createElement("div");
                requestDiv.classList.add("friend-request-item");
            
            // Avatar image
            const avatarImg = document.createElement("img");
            avatarImg.src = request.sender_avatar || "images/default-avatar.png";
            avatarImg.alt = request.sender_username || "User Avatar";
            avatarImg.classList.add("user-avatar");
            
            // Username
            const usernameSpan = document.createElement("span");
            usernameSpan.classList.add("username");
            usernameSpan.textContent = request.sender_username || "Unknown";
            
            // Accept button
            const acceptButton = document.createElement("button");
            acceptButton.textContent = "Accept";
            acceptButton.classList.add("accept-button");
            acceptButton.addEventListener("click", () => acceptFriendRequest(request.id));
            
            // Reject button
            const rejectButton = document.createElement("button");
            rejectButton.textContent = "Reject";
            rejectButton.classList.add("reject-button");
            rejectButton.addEventListener("click", () => rejectFriendRequest(request.id));
            
            // Append elements to the request div
            requestDiv.appendChild(avatarImg);
            requestDiv.appendChild(usernameSpan);
            requestDiv.appendChild(acceptButton);
            requestDiv.appendChild(rejectButton);
            
            // Append the request div to the list container
            friendRequestsList.appendChild(requestDiv);
          });
        }
      } catch (error) {
        console.error("Error loading pending friend requests:", error);
      }
    }

    async function fetchAndDisplayFriends(friendsButton) {
        try {

            console.log("authToken: ", localStorage.getItem("authToken"));
          const response = await fetch("http://127.0.0.1:8000/friends/list/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
            },
          });
      
          if (!response.ok) {
            console.error("Failed to fetch friend list. Status:", response.status);
            return;
          }
      
          const data = await response.json();
          console.log("Friend list API response:", data);
      
          let friendList = [];
          if (data.data && Array.isArray(data.data)) {
            friendList = data.data.map(item => Object.assign({}, item.attributes, { id: item.id }));
          } else {
            console.error("Unexpected response format for friend list:", data);
            return;
          }
      
          // Check if the friend list container already exists
          let friendListContainer = document.getElementById("dynamic-friend-list");
          if (friendListContainer) {
            friendListContainer.remove(); // Remove it if it exists to toggle off
            return;
          }
      
          // Create a new container for the friend list
          friendListContainer = document.createElement("div");
          friendListContainer.id = "dynamic-friend-list";
          friendListContainer.classList.add("friend-list-container");
      
          if (friendList.length === 0)
          {
            friendListContainer.innerHTML = "<p>No friends found.</p>";
            noFriendsMessage.textContent = "No friends found.";
            noFriendsMessage.classList.add("no-friends-message"); // Styled message
          } else {
            friendList.forEach(friend => {
              const friendDiv = document.createElement("div");
              friendDiv.classList.add("friend-item");
      
              // Avatar image
              const avatarImg = document.createElement("img");
              avatarImg.src = friend.avatar || "images/default-avatar.png";
              avatarImg.alt = friend.username || "Friend Avatar";
              avatarImg.classList.add("friend-avatar");
      
              // Username
              const usernameSpan = document.createElement("span");
              usernameSpan.classList.add("friend-username");
              usernameSpan.textContent = friend.username || "Unknown";
      
              friendDiv.appendChild(avatarImg);
              friendDiv.appendChild(usernameSpan);
              friendListContainer.appendChild(friendDiv);
            });
          }
      
          // Insert the container right after the Friends button
          friendsButton.insertAdjacentElement("afterend", friendListContainer);
        } catch (error) {
          console.error("Error fetching friend list:", error);
        }
      }

      function displayUserSearchResults(users) {
        const resultsContainer = document.getElementById("user-list-container");
        if (!resultsContainer) return;
      
        resultsContainer.innerHTML = ""; // Clear previous results
      
        users.forEach((user) => {
          const userDiv = document.createElement("div");
          userDiv.classList.add("user-row");
      
          // Create avatar image element
          const avatarImg = document.createElement("img");
          avatarImg.src = user.avatar || "images/default-avatar.png";
          avatarImg.alt = user.username || "User Avatar";
        //   avatarImg.classList.add("user-avatar");
        
          // Create username element
          const usernameSpan = document.createElement("span");
          usernameSpan.classList.add("username");
          usernameSpan.textContent = user.username || "Unknown";

            // Create Invite Button
          const inviteButton = document.createElement("button");
          inviteButton.textContent = "Invite";
          inviteButton.classList.add("invite-button");
          inviteButton.onclick = () => sendFriendRequest(user.id); // Attach click event
      
        // Append elements to the user row
          userDiv.appendChild(avatarImg);
          userDiv.appendChild(usernameSpan);
          userDiv.appendChild(inviteButton);
      
          // Append the user row to the results container
          resultsContainer.appendChild(userDiv);
        });
      }

    async function fetchAndDisplayUsers() {
        try {
            const response = await fetch("http://127.0.0.1:8000/users/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("authToken")}`
            }
          });
      
          if (!response.ok) {
            console.error("Failed to fetch users. Status:", response.status);
            return;
          }
      
          const data = await response.json();
          let userList = [];
          if (data.data && Array.isArray(data.data)) {
            // Map each item to include its attributes plus its id
            userList = data.data.map(item => Object.assign({}, item.attributes, { id: item.id }));
          } else {
            console.error("Unexpected response format:", data);
            return;
          }
      
          // Exclude the current user (if user_id is stored)
          const currentUserId = localStorage.getItem("user_id");
          if (currentUserId) {
            userList = userList.filter(user => parseInt(user.id) !== parseInt(currentUserId));
          }
      
          // Save the full list globally
          allUsers = userList;
          shuffleArray(userList);

          // Display only the first 5 users
          const limitedUsers = userList.slice(0, 6);
          displayUserSearchResults(limitedUsers);
        } catch (error) {
          console.error("Error fetching all users:", error);
        }
      }

      async function searchAndDisplayUsers(query) {
        // If allUsers isn't loaded yet, fetch it first
        if (!allUsers.length) {
          await fetchAndDisplayUsers();
        }
        // Filter allUsers by username (case-insensitive)
        const filteredUsers = allUsers.filter(user =>
          user.username.toLowerCase().includes(query.toLowerCase())
        );
        // Limit the results to 5
        // const limitedFiltered = filteredUsers.slice(0, 5);
        displayUserSearchResults(filteredUsers);
      }

      function initializeProfileEdit() {
        const editProfileButton = document.getElementById('edit-p-btn');
        if (editProfileButton) {
            editProfileButton.addEventListener('click', openEditProfileModal);
        }
    }
    
    function openEditProfileModal() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'edit-profile-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1000';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';
    
        // Create modal container
        const modal = document.createElement('div');
        modal.id = 'edit-profile-modal';
        modal.style.backgroundColor = '#fff';
        modal.style.padding = '25px';
        modal.style.borderRadius = '12px';
        modal.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        modal.style.width = '350px';
        modal.style.maxWidth = '90%';
        modal.style.fontFamily = "'Poppins', sans-serif";
        modal.style.transform = 'scale(0.9)';
        modal.style.opacity = '0';
        modal.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    
        // Title
        const title = document.createElement('h3');
        title.innerText = 'Edit Profile';
        title.style.margin = '0 0 20px';
        title.style.fontSize = '24px';
        title.style.color = '#333';
        title.style.textAlign = 'center';
    
        // Form container
        const form = document.createElement('form');
        form.id = 'edit-profile-form';
    
        // Username input
        const usernameLabel = document.createElement('label');
        usernameLabel.innerText = 'Username';
        usernameLabel.style.display = 'block';
        usernameLabel.style.marginBottom = '5px';
        usernameLabel.style.fontSize = '14px';
        usernameLabel.style.color = '#555';
    
        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.id = 'edit-username';
        usernameInput.value = document.getElementById('profile-username').innerText || '';
        usernameInput.style.width = '100%';
        usernameInput.style.padding = '10px';
        usernameInput.style.marginBottom = '15px';
        usernameInput.style.border = '1px solid #ddd';
        usernameInput.style.borderRadius = '6px';
        usernameInput.style.fontSize = '16px';
        usernameInput.style.boxSizing = 'border-box';
        usernameInput.style.transition = 'border-color 0.3s ease';
    
        // Avatar preview
        const avatarPreviewLabel = document.createElement('label');
        avatarPreviewLabel.innerText = 'Current Avatar';
        avatarPreviewLabel.style.display = 'block';
        avatarPreviewLabel.style.marginBottom = '10px';
        avatarPreviewLabel.style.fontSize = '14px';
        avatarPreviewLabel.style.color = '#555';
    
        const avatarPreview = document.createElement('img');
        avatarPreview.id = 'avatar-preview';
        avatarPreview.src = document.getElementById('profile-img').src || 'images/default-avatar.png';
        avatarPreview.style.width = '100px';
        avatarPreview.style.height = '100px';
        avatarPreview.style.borderRadius = '50%';
        avatarPreview.style.objectFit = 'cover';
        avatarPreview.style.marginBottom = '15px';
        avatarPreview.style.display = 'block';
        avatarPreview.style.marginLeft = 'auto';
        avatarPreview.style.marginRight = 'auto';
    
        // Avatar file input
        const avatarLabel = document.createElement('label');
        avatarLabel.innerText = 'Upload New Avatar';
        avatarLabel.style.display = 'block';
        avatarLabel.style.marginBottom = '5px';
        avatarLabel.style.fontSize = '14px';
        avatarLabel.style.color = '#555';
    
        const avatarInput = document.createElement('input');
        avatarInput.type = 'file';
        avatarInput.id = 'edit-avatar';
        avatarInput.accept = 'image/*'; // Restrict to images
        avatarInput.style.width = '100%';
        avatarInput.style.padding = '5px';
        avatarInput.style.marginBottom = '20px';
        avatarInput.style.fontSize = '14px';
    
        // Buttons container
        const buttonsDiv = document.createElement('div');
        buttonsDiv.style.display = 'flex';
        buttonsDiv.style.justifyContent = 'space-between';
    
        const saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.type = 'button';
        saveButton.style.padding = '10px 20px';
        saveButton.style.backgroundColor = '#28a745';
        saveButton.style.color = 'white';
        saveButton.style.border = 'none';
        saveButton.style.borderRadius = '6px';
        saveButton.style.cursor = 'pointer';
        saveButton.style.fontSize = '16px';
        saveButton.style.transition = 'background-color 0.3s ease';
    
        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'Cancel';
        cancelButton.type = 'button';
        cancelButton.style.padding = '10px 20px';
        cancelButton.style.backgroundColor = '#dc3545';
        cancelButton.style.color = 'white';
        cancelButton.style.border = 'none';
        cancelButton.style.borderRadius = '6px';
        cancelButton.style.cursor = 'pointer';
        cancelButton.style.fontSize = '16px';
        cancelButton.style.transition = 'background-color 0.3s ease';
    
        // Append elements
        form.appendChild(usernameLabel);
        form.appendChild(usernameInput);
        form.appendChild(avatarPreviewLabel);
        form.appendChild(avatarPreview);
        form.appendChild(avatarLabel);
        form.appendChild(avatarInput);
        buttonsDiv.appendChild(saveButton);
        buttonsDiv.appendChild(cancelButton);
        form.appendChild(buttonsDiv);
        modal.appendChild(title);
        modal.appendChild(form);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    
        // Animation trigger
        setTimeout(() => {
            overlay.style.opacity = '1';
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 10);
    
        // Input hover/focus effects
        usernameInput.addEventListener('focus', () => {
            usernameInput.style.borderColor = '#28a745';
        });
        usernameInput.addEventListener('blur', () => {
            usernameInput.style.borderColor = '#ddd';
        });
    
        // Preview avatar when file is selected
        avatarInput.addEventListener('change', () => {
            const file = avatarInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarPreview.src = e.target.result; // Live preview
                };
                reader.readAsDataURL(file);
            }
        });
    
        // Button hover effects
        saveButton.addEventListener('mouseover', () => {
            saveButton.style.backgroundColor = '#218838';
        });
        saveButton.addEventListener('mouseout', () => {
            saveButton.style.backgroundColor = '#28a745';
        });
        cancelButton.addEventListener('mouseover', () => {
            cancelButton.style.backgroundColor = '#c82333';
        });
        cancelButton.addEventListener('mouseout', () => {
            cancelButton.style.backgroundColor = '#dc3545';
        });
    
        // Cancel: Fade out and remove
        cancelButton.addEventListener('click', () => {
            overlay.style.opacity = '0';
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.9)';
            setTimeout(() => document.body.removeChild(overlay), 300);
        });
    
        // Save: Upload file and update profile
        saveButton.addEventListener('click', async () => {
            const newUsername = usernameInput.value.trim();
            const file = avatarInput.files[0];
        
            if (!newUsername) {
                usernameInput.value = document.getElementById('profile-username').innerText;
                return;
            }
        
            try {
                const token = localStorage.getItem('authToken');
                const formData = new FormData();
                formData.append('user.username', newUsername);
                if (file) {
                    formData.append('avatar', file);
                }
        
                const response = await fetch('http://127.0.0.1:8000/profile/update/', {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                });
        
                console.log("Response status:", response.status); // Log status
                const result = await response.json(); // Parse response regardless of status
                console.log("Backend response:", result); // Log full response
        
                if (response.ok) {
                    document.getElementById('profile-username').innerText = newUsername;
                    if (file) {
                        // Adjust based on actual response structure
                        const newAvatarUrl = result.profile?.avatar || result.avatar || avatarPreview.src;
                        document.getElementById('profile-img').src = newAvatarUrl;
                    }
                    alert("Profile updated successfully!");
                } else {
                    console.error("Server error:", result);
                    alert("Failed to update profile: " + JSON.stringify(result));
                }
            } catch (error) {
                console.error("Error updating profile:", error);
                alert("Error updating profile. Please try again.");
            }
        
            overlay.style.opacity = '0';
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.9)';
            setTimeout(() => document.body.removeChild(overlay), 300);
        });
    }

      /////////////////////////////chat////////////////////////////////////
      
      document.querySelectorAll('.user').forEach(userElem => {
        userElem.addEventListener('click', () => {
            const userId = userElem.getAttribute('data-user-id');
            // Call your switchConversation function with the user ID or name
            switchConversation(userId);
        });
    });
    
    async function initializechatFunctionality() {
        const sendButton = document.getElementById('send-btn');
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');
        const emojiPicker = document.getElementById('emojiPicker');
        const emojiToggleButton = document.getElementById('emoji-toggle-btn');
        const chatHeader = document.getElementById('chat-header');
    
        const conversations = {
            user1: [],
            user2: [],
            user3: []
        };
    
        let currentUser = 'user1'; // Default user
    
        emojiToggleButton.addEventListener('click', () => {
            const isPickerVisible = emojiPicker.style.display === 'block';
            emojiPicker.style.display = isPickerVisible ? 'none' : 'block';
        });
    
        function addEmoji(emoji) {
            chatInput.value += emoji;
            chatInput.focus();
            emojiPicker.style.display = 'none';
        }
    
        function sendMessage() {
            const userMessage = chatInput.value.trim();
            if (!userMessage) return;
        
            const timestamp = new Date().toLocaleTimeString();
            conversations[currentUser].push({ text: userMessage, type: 'user', time: timestamp });
            displayMessage(userMessage, 'user', timestamp);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        
            setTimeout(() => {
                const botMessage = `You said: ${userMessage}`;
                const botTimestamp = new Date().toLocaleTimeString();
                conversations[currentUser].push({ text: botMessage, type: 'bot', time: botTimestamp });
                displayMessage(botMessage, 'bot', botTimestamp);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 500);
        }
    
        function displayMessage(message, sender, timestamp) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', `${sender}-message`);
        
            const messageText = document.createElement('span');
            messageText.classList.add('message-text');
            messageText.textContent = message;
        
            const timeSpan = document.createElement('span');
            timeSpan.classList.add('message-time');
            timeSpan.textContent = timestamp;
        
            messageDiv.appendChild(messageText);
            messageDiv.appendChild(timeSpan);
            chatMessages.appendChild(messageDiv);
        }
    
        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
                event.preventDefault();
            }
        });
    
        // Define switchConversation
        async function switchConversation(user) {
            if (currentUser === user) return;
            currentUser = user;
            chatHeader.textContent = `Chat with ${user.charAt(0).toUpperCase() + user.slice(1)}`;
            chatMessages.innerHTML = '';
            conversations[user].forEach((message) => {
                displayMessage(message.text, message.type, message.time);
            });
        }
    
        // Expose the function globally so inline onclick can find it:
        window.switchConversation = switchConversation;
    }
    
    ///////////////////////////////////////////chat////////////////////////////////////
    // Load the initial page
    preloadStylesheet('dashboard.css'); // Dashboard CSS
    preloadStylesheet('profile.css'); // Profile page CSS
    // preloadStylesheet('styleGame.css'); // Game page CSS (if applicable)
    loadCSS('chat.css'); // Load the dashboard CSS

    window.addEventListener('popstate', () => {
        renderPage(window.location.hash);
    });
    renderPage(window.location.hash || '#/sign-in');
});
