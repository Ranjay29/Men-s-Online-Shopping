// =============== Product Data ===============
const productData = {
    shirt: [
        { id: 1, name: 'Checked Shirt', images: ['./images/shirt1.jpg'], description: 'Premium quality checked shirt perfect for casual and semi-formal wear.' },
        { id: 2, name: 'Striped Shirt', images: ['./images/shirt2.webp'], description: 'Classic striped design shirt suitable for all occasions.' },
        { id: 3, name: 'Cuban / Party Wear Shirt', images: ['./images/shirt3.jpg'], description: 'Stylish party wear shirt with Cuban collar design.' },
        { id: 4, name: 'Designer Shirt', images: ['./images/shirt4.jpg'], description: 'Exclusive designer shirt with premium fabric and finish.' }
    ],
    tshirt: [
        { id: 1, name: 'Lined White Collar T-Shirt', images: ['./images/tshirt1.jpg'], description: 'Comfortable t-shirt with lined white collar.' },
        { id: 2, name: 'Stylish Collar T-Shirt', images: ['./images/tshirt2.jpg'], description: 'Modern and stylish collar design t-shirt.' },
        { id: 3, name: 'Stripped T-Shirt', images: ['./images/tshirt3.jpg'], description: 'Classic stripped pattern t-shirt.' },
        { id: 4, name: 'Pink Collar T-Shirt', images: ['./images/tshirt4.jpg'], description: 'Trendy pink collar t-shirt perfect for casual wear.' },
        { id: 5, name: 'Blue with White Collar T-Shirt', images: ['./images/tshirt5.jpg'], description: 'Blue t-shirt with elegant white collar.' }
    ],
    hoodie: [
        { id: 1, name: 'Hoodie', images: ['./images/hoodie1.jpg'], description: 'Warm and comfortable hoodie for everyday wear.' },
        { id: 2, name: 'Hoodie', images: ['./images/hoodie2.jpg'], description: 'Premium quality hoodie with soft interior.' },
        { id: 3, name: 'Hoodie', images: ['./images/hoodie3.jpg'], description: 'Stylish hoodie perfect for cold weather.' },
        { id: 4, name: 'Hoodie', images: ['./images/hoodie4.webp'], description: 'Durable hoodie with excellent fabric quality.' },
        { id: 5, name: 'Hoodie', images: ['./images/hoodie5.jpg'], description: 'Cozy hoodie ideal for sports and casual activities.' }
    ],
    jeans: [
        { id: 1, name: 'Jeans', images: ['./images/jeans1.jpg'], description: 'Classic denim jeans with perfect fit.' },
        { id: 2, name: 'Jeans', images: ['./images/jeans2.jpg'], description: 'Comfortable jeans suitable for daily wear.' },
        { id: 3, name: 'Jeans', images: ['./images/jeans3.jpg'], description: 'Stylish jeans with modern design.' },
        { id: 4, name: 'Jeans', images: ['./images/jeans4.jpg'], description: 'Premium denim jeans with excellent durability.' },
        { id: 5, name: 'Jeans', images: ['./images/jeans5.jpg'], description: 'Trendy jeans perfect for all seasons.' }
    ],
    shoe: [
        { id: 1, name: 'Shoe', images: ['./images/shoe1.jpg'], description: 'Comfortable and stylish casual shoe.' },
        { id: 2, name: 'Shoe', images: ['./images/shoe2.jpg'], description: 'Premium quality shoe with excellent comfort.' },
        { id: 3, name: 'Shoe', images: ['./images/shoe3.jpg'], description: 'Modern design shoe suitable for various occasions.' },
        { id: 4, name: 'Shoe', images: ['./images/shoe4.jpg'], description: 'Durable shoe with superior grip and support.' },
        { id: 5, name: 'Shoe', images: ['./images/shoe5.jpg'], description: 'Trendy shoe perfect for sports and casual wear.' }
    ],
    accessories: [
        { id: 1, name: 'Cap', images: ['./images/cap1.jpg'], description: 'Stylish cap perfect for any casual outfit.' },
        { id: 2, name: 'Cap', images: ['./images/cap2.jpg'], description: 'Premium quality cap with comfortable fit.' },
        { id: 3, name: 'Belt', images: ['./images/belt1.jpg'], description: 'Classic leather belt for formal and casual wear.' },
        { id: 4, name: 'Belt', images: ['./images/belt2.jpg'], description: 'Durable belt with premium buckle design.' },
        { id: 5, name: 'Belt', images: ['./images/belt3.jpg'], description: 'Stylish belt perfect to complete your look.' },
        { id: 6, name: 'Belt', images: ['./images/belt4.jpg'], description: 'Versatile belt suitable for all occasions.' },
        { id: 7, name: 'Wallet', images: ['./images/wallet1.jpg'], description: 'Compact leather wallet with card slots.' },
        { id: 8, name: 'Wallet', images: ['./images/wallet2.jpg'], description: 'Premium wallet with RFID protection.' },
        { id: 9, name: 'Wallet', images: ['./images/wallet3.jpg'], description: 'Stylish wallet with multiple compartments.' },
        { id: 10, name: 'Watch', images: ['./images/watch1.jpg'], description: 'Elegant watch for everyday wear.' },
        { id: 11, name: 'Watch', images: ['./images/watch2.jpg'], description: 'Classic timepiece with premium build.' },
        { id: 12, name: 'Watch', images: ['./images/watch3.jpg'], description: 'Modern watch with comfortable design.' }
    ]
};

// =============== Modal Functions ===============
function openProductModal(category, productId) {
    const product = productData[category][productId - 1];
    if (!product) return;

    let modal = document.getElementById('productModal');
    if (!modal) {
        createModal();
        modal = document.getElementById('productModal');
    }

    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    const imageSlider = document.getElementById('modalImageSlider');
    imageSlider.innerHTML = product.images.map((img, idx) => 
        `<img src="${img}" alt="${product.name}" class="modal-slider-img ${idx === 0 ? 'active' : ''}" style="display: ${idx === 0 ? 'block' : 'none'}">`
    ).join('');

    const sliderContainer = document.querySelector('.modal-slider-container');
    if (product.images.length > 1) {
        sliderContainer.innerHTML += `
            <button class="slider-btn prev" onclick="changeSlide(-1)">❮</button>
            <button class="slider-btn next" onclick="changeSlide(1)">❯</button>
        `;
    }

    modal.style.display = 'block';
    modal.dataset.category = category;
    modal.dataset.productId = productId;
}

function createModal() {
    const modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeProductModal()">&times;</span>
            <div class="modal-body">
                <div class="modal-slider-container">
                    <div id="modalImageSlider"></div>
                </div>
                <div class="modal-details">
                    <h2 id="modalProductName"></h2>
                    <p id="modalProductDescription"></p>
                    <label>SIZE:</label>
                    <select id="modalSizeSelect">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <button class="btn-modal" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeProductModal();
        }
    };
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function changeSlide(direction) {
    const images = document.querySelectorAll('.modal-slider-img');
    if (images.length === 0) return;

    let current = 0;
    images.forEach((img, idx) => {
        if (img.style.display === 'block') {
            current = idx;
        }
        img.style.display = 'none';
    });

    current = (current + direction + images.length) % images.length;
    images[current].style.display = 'block';
}

// =============== Cart & Shopping Functions ===============
function Cart() {
    addToCart();
}

function addToCart() {
    alert('Your selected product has been added to the cart');
    closeProductModal();
}

// =============== Navigation Functions ===============
function logout() {
    alert('Logged out successfully!');
}

function youraccount() {
    alert('Redirecting to your account...');
}

function showFeedbackForm() {
    alert('Opening feedback form...');
}

function backtohomepage() {
    alert('Returning to home page...');
}

// =============== Form Functions ===============
function login() {
    const username = document.querySelector('input[placeholder="Username*"]');
    if (username && username.value.trim()) {
        alert('You have successfully logged in');
    } else {
        alert('Please fill in all fields');
    }
}

function register() {
    const username = document.querySelector('input[placeholder="Username"]');
    if (username && username.value.trim()) {
        alert('You have successfully registered');
    } else {
        alert('Please fill in all fields');
    }
}

function submit() {
    alert('Thank you for submitting your valuable feedback');
}

// =============== Modal Styles (injected) ===============
function loadModalStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-content {
            position: relative;
            background-color: #1c1c1c;
            margin: auto;
            padding: 20px;
            width: 90%;
            max-width: 900px;
            border-radius: 15px;
            top: 50%;
            transform: translateY(-50%);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            animation: slideIn 0.3s;
        }

        @keyframes slideIn {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(-50%); opacity: 1; }
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s;
        }

        .close:hover {
            color: #fff;
        }

        .modal-body {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        .modal-slider-container {
            position: relative;
            flex: 1;
            max-width: 400px;
            margin: 0 auto;
        }

        #modalImageSlider {
            width: 100%;
            position: relative;
        }

        .modal-slider-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 10px;
        }

        .slider-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255, 255, 255, 0.8);
            color: #000;
            border: none;
            padding: 10px 15px;
            font-size: 20px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
            z-index: 10;
        }

        .slider-btn:hover {
            background-color: rgba(255, 255, 255, 1);
        }

        .slider-btn.prev {
            left: 10px;
        }

        .slider-btn.next {
            right: 10px;
        }

        .modal-details {
            flex: 1;
            color: #fff;
        }

        .modal-details h2 {
            color: #fff;
            margin-bottom: 15px;
            font-size: 28px;
        }

        .modal-details p {
            color: #ccc;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .modal-details label {
            display: block;
            margin-top: 15px;
            margin-bottom: 8px;
            color: #fff;
            font-weight: bold;
        }

        .modal-details select {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 6px;
            border: none;
            outline: none;
        }

        .btn-modal {
            width: 100%;
            padding: 12px;
            background: #ffffff;
            color: #000;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        .btn-modal:hover {
            background-color: #ddd;
        }

        @media (max-width: 768px) {
            .modal-body {
                flex-direction: column;
                gap: 15px;
            }

            .modal-slider-img {
                height: 300px;
            }

            .modal-content {
                width: 95%;
                padding: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Load styles on page load
document.addEventListener('DOMContentLoaded', loadModalStyles);
