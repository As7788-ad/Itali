document.addEventListener('DOMContentLoaded', () => {

    // 1. Logic for active navigation link (تم دمج جميع الروابط)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Product Categories Modal Logic (لصفحة products.html فقط)
    const categoryModal = document.getElementById('categoryModal');
    const closeButton = document.querySelector('#categoryModal .close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescriptionContainer = document.getElementById('modalDescriptionContainer'); // عنصر جديد لعرض الوصف التفصيلي

    const productImages = document.querySelectorAll('.product-item img');

    // كائن يحتوي على تفاصيل احترافية لكل فئة
    const productsDetails = {
        'thobes': {
            title: 'الثياب الرجالية الفاخرة',
            description: `
                <p>نقدم تشكيلة فريدة من الثياب الرجالية بتصاميم عصرية وأنيقة، تجمع بين الأصالة الشرقية والفخامة الإيطالية. كل ثوب يتميز بقصته المريحة والمناسبة لمختلف الأجسام، مع اهتمام دقيق بالتفاصيل الراقية التي تضفي لمسة من التميز على إطلالتك.</p>
                <h4>تفاصيل ومميزات:</h4>
                <ul>
                    <li><strong>الأقمشة:</strong> نستخدم أجود أنواع الأقمشة مثل القطن المصري الفاخر، الأقمشة اليابانية الفاخرة، والكتان الإيطالي عالي الجودة لضمان الراحة والمتانة.</li>
                    <li><strong>الألوان:</strong> متوفرة بمجموعة واسعة من الألوان الكلاسيكية مثل الأبيض، البيج، الرمادي، والأزرق الداكن، بالإضافة إلى درجات لونية عصرية وموسمية.</li>
                    <li><strong>الأنواع:</strong> تشمل الثياب الرسمية، الثياب اليومية، والثياب المناسبة للمناسبات الخاصة، مع خيارات متعددة للأكمام والياقات.</li>
                    <li><strong>المقاسات:</strong> تفصيل حسب المقاس لضمان الملاءمة المثالية، مع إمكانية التعديل حسب رغبتك.</li>
                </ul>
                <p>اختر ثيابك من "لمسات الإيطالي" لتشعر بالثقة والراحة في كل الأوقات.</p>
            `,
            image: 'https://images.pexels.com/photos/6684824/pexels-photo-6684824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        'suits': {
            title: 'البدلات الرجالية الفخمة',
            description: `
                <p>اكتشف مجموعتنا الحصرية من البدلات الرجالية، المصممة خصيصًا لتمنحك إطلالة متكاملة من الأناقة والرقي. كل بدلة تعكس فن الخياطة الإيطالية الأصيل، مع قصات عصرية تبرز جمال القوام وتلائم جميع المناسبات الرسمية والاجتماعية.</p>
                <h4>تفاصيل ومميزات:</h4>
                <ul>
                    <li><strong>الأقمشة:</strong> نختار أرقى الأقمشة الإيطالية والإنجليزية مثل الصوف الفاخر (Super 120s, 150s)، الكشمير، ومزيج الحرير والصوف، لضمان مظهر فاخر وملمس ناعم.</li>
                    <li><strong>الألوان:</strong> تشمل البدلات الكلاسيكية باللون الأسود، الكحلي، والرمادي، بالإضافة إلى بدلات عصرية بألوان وأنماط مميزة.</li>
                    <li><strong>الأنواع:</strong> بدلات رسمية، بدلات عمل، بدلات زفاف، وبدلات بتصاميم عصرية (Slim Fit, Regular Fit) لتناسب ذوقك الشخصي.</li>
                    <li><strong>التفصيل:</strong> كل بدلة تفصل خصيصاً لك، مع إمكانية اختيار نوع الياقة، تصميم الأزرار، والبطانة الداخلية.</li>
                </ul>
                <p>تألق بأناقة لا مثيل لها مع بدلات "لمسات الإيطالي" التي تجمع بين التراث والحداثة.</p>
            `,
            image: 'https://images.pexels.com/photos/157675/fashion-men-s-fashion-suit-mancini-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        'coats': {
            title: 'المعاطف الرجالية الأنيقة',
            description: `
                <p>تجسد معاطفنا الرجالية الفخامة والدفء، وهي إضافة مثالية لخزانة الرجل العصري في الأجواء الباردة. تم تصميم كل معطف بعناية فائقة ليوفر الراحة والأناقة، مع الحفاظ على خطوط التصميم الإيطالي الكلاسيكي والحديث.</p>
                <h4>تفاصيل ومميزات:</h4>
                <ul>
                    <li><strong>الأقمشة:</strong> نستخدم الصوف الخالص، الكشمير، ومزيج الصوف الفاخر المقاوم للماء لضمان الدفء والمتانة.</li>
                    <li><strong>الألوان:</strong> متوفرة بألوان أساسية مثل الأسود، الرمادي، البيج، والأزرق الداكن، بالإضافة إلى أنماط وتدرجات لونية موسمية.</li>
                    <li><strong>الأنواع:</strong> تشمل المعاطف الطويلة (Overcoats)، معاطف الترنش (Trench Coats)، والمعاطف القصيرة (Pea Coats)، بتصاميم تناسب الإطلالات الرسمية والكاجوال.</li>
                    <li><strong>التصميم:</strong> قصات مريحة وتفاصيل دقيقة كالجيوب المخفية والأزرار الفاخرة، لتضمن لك إطلالة جذابة وعملية.</li>
                </ul>
                <p>كن مستعدًا للأناقة والدفء مع معاطف "لمسات الإيطالي" الفاخرة.</p>
            `,
            image: 'https://images.pexels.com/photos/10188686/pexels-photo-10188686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        'shawls': {
            title: 'الشيلان الرجالية الراقية',
            description: `
                <p>الشال الرجالي هو قطعة أساسية تضفي لمسة من الفخامة والرقي على إطلالتك. في "لمسات الإيطالي"، نقدم شيلاناً مصممة بعناية فائقة لتكمل أناقتك وتوفر لك الدفء والراحة في الأجواء المختلفة.</p>
                <h4>تفاصيل ومميزات:</h4>
                <ul>
                    <li><strong>الأقمشة:</strong> مصنوعة من أجود أنواع الكشمير، الصوف الفاخر، ومزيج الحرير، لضمان ملمس ناعم وجودة تدوم طويلاً.</li>
                    <li><strong>الألوان والأنماط:</strong> متوفرة بتشكيلة واسعة من الألوان الكلاسيكية والزاهية، بالإضافة إلى أنماط تراثية وعصرية تناسب جميع الأذواق والمناسبات.</li>
                    <li><strong>التصميم:</strong> حياكة يدوية دقيقة وتفاصيل أنيقة، لتكون إضافة مميزة لملابسك التقليدية أو العصرية.</li>
                </ul>
                <p>أكمل أناقتك وتميز بشيلان "لمسات الإيطالي" الفاخرة.</p>
            `,
            image: 'https://images.pexels.com/photos/9779374/pexels-photo-9779374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        'school-uniforms': {
            title: 'الأزياء المدرسية ذات الجودة العالية',
            description: `
                <p>في "لمسات الإيطالي"، نؤمن بأن الزي المدرسي يجب أن يجمع بين الجودة، المتانة، والراحة ليساعد الطلاب على التركيز والتميز. نقدم أزياء مدرسية مصممة خصيصًا لتتحمل الاستخدام اليومي المكثف مع الحفاظ على مظهرها الأنيق والرسمي.</p>
                <h4>تفاصيل ومميزات:</h4>
                <ul>
                    <li><strong>الأقمشة:</strong> نستخدم أقمشة عالية الجودة ومقاومة للتلف وسهلة التنظيف، مثل مزيج القطن والبوليستر المتين الذي يوفر التهوية والراحة.</li>
                    <li><strong>الألوان:</strong> نلتزم بالألوان والمعايير المحددة للمدارس، مع ضمان ثبات الألوان وعدم بهتانها مع الغسيل المتكرر.</li>
                    <li><strong>التصميم:</strong> تصميمات عملية ومريحة تسمح بحرية الحركة، مع اهتمام بالتفاصيل التي تضمن مظهراً لائقاً ومهندماً.</li>
                    <li><strong>المقاسات:</strong> متوفرة بمجموعة واسعة من المقاسات لتناسب جميع الأعمار، مع إمكانية التعديل للحصول على الملاءمة المثالية.</li>
                </ul>
                <p>اختر "لمسات الإيطالي" لزي مدرسي يضمن الراحة والأناقة لأبنائنا الطلاب.</p>
            `,
            image: 'https://images.pexels.com/photos/17697843/pexels-photo-17697843/free-photo-of-man-in-white-dress-wearing-turban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    };

    if (categoryModal && productImages.length > 0) {
        productImages.forEach(image => {
            image.addEventListener('click', function() {
                const productItem = this.closest('.product-item');
                const productKey = productItem.dataset.productKey; // نحصل على المفتاح من data-product-key

                const productInfo = productsDetails[productKey]; // نسحب المعلومات من الكائن

                if (productInfo) {
                    modalTitle.textContent = productInfo.title;
                    modalImage.src = productInfo.image;
                    modalImage.alt = productInfo.title;
                    // نستخدم innerHTML لعرض المحتوى الذي قد يحتوي على تنسيقات HTML
                    modalDescriptionContainer.innerHTML = productInfo.description;

                    categoryModal.style.display = 'block';
                }
            });
        });

        closeButton.addEventListener('click', () => {
            categoryModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == categoryModal) {
                categoryModal.style.display = 'none';
            }
        });
    }

    // 3. FAQ Accordion Logic (خاص بصفحة الخدمات services.html)
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.closest('.faq-item');
                const answer = faqItem.querySelector('.faq-answer');

                question.classList.toggle('active');

                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    answer.style.paddingTop = '0';
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.paddingTop = '15px';
                }
            });
        });
    }

    // 4. Measurement Form Submission (Client-side handling only) (خاص بصفحة المقاسات measurements.html)
    const measurementForm = document.getElementById('measurementForm');
    const formMessage = document.getElementById('formMessage');

    if (measurementForm) {
        measurementForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let isValid = true;
            const requiredInputs = measurementForm.querySelectorAll('input[required], textarea[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (!isValid) {
                formMessage.textContent = 'الرجاء ملء جميع الحقول المطلوبة.';
                formMessage.style.color = 'red';
                return;
            }

            const formData = new FormData(measurementForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            console.log('Submitted Measurement Data:', data);
            formMessage.textContent = 'تم إرسال مقاساتك بنجاح! سنتواصل معك قريباً.';
            formMessage.style.color = 'green';
            measurementForm.reset();
        });
    }

    // 5. Contact Form Validation and Submission (Client-side only) (خاص بصفحة اتصل بنا contact.html)
    const contactForm = document.getElementById('contactForm');
    const contactFormMessage = document.getElementById('contactFormMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let isValid = true;
            const requiredInputs = contactForm.querySelectorAll('input[required], textarea[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            const emailInput = document.getElementById('email');
            if (emailInput && (!emailInput.value.includes('@') || !emailInput.value.includes('.'))) {
                isValid = false;
                emailInput.style.borderColor = 'red';
            } else if (emailInput) {
                emailInput.style.borderColor = '';
            }

            if (!isValid) {
                contactFormMessage.textContent = 'الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.';
                contactFormMessage.style.color = 'red';
                return;
            }

            console.log('Contact Form Submitted:', new FormData(contactForm));
            contactFormMessage.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
            contactFormMessage.style.color = 'green';
            contactForm.reset();
        });
    }

    // 6. Appointment Form Validation and Submission (Client-side only) (خاص بصفحة اتصل بنا contact.html)
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentFormMessage = document.getElementById('appointmentFormMessage');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let isValid = true;
            const requiredInputs = appointmentForm.querySelectorAll('input[required], select[required], textarea[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            const appService = document.getElementById('service');
            if (appService && appService.value === "") {
                isValid = false;
                appService.style.borderColor = 'red';
            } else if (appService) {
                appService.style.borderColor = '';
            }

            if (!isValid) {
                appointmentFormMessage.textContent = 'الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.';
                appointmentFormMessage.style.color = 'red';
                return;
            }

            console.log('Appointment Form Submitted:', new FormData(appointmentForm));
            appointmentFormMessage.textContent = 'تم تأكيد حجز موعدك بنجاح! نرحب بك.';
            appointmentFormMessage.style.color = 'green';
            appointmentForm.reset();
        });
    }

});



// NEW: Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Consolidated data for searching (categories and keywords)
    const searchableContent = {
        'ثياب': 'thobes.html',
        'ثياب رجالية': 'thobes.html',
        'ثوب': 'thobes.html',
        'بدل': 'suits.html',
        'بدلة': 'suits.html',
        'بدل رجالية': 'suits.html',
        'معاطف': 'coats.html',
        'معطف': 'coats.html',
        'معاطف رجالية': 'coats.html',
        'أوشحة': 'shawls.html',
        'شالات': 'shawls.html',
        'وشاح': 'shawls.html',
        'شال': 'shawls.html',
        'زي مدرسي': 'school-uniforms.html',
        'زي مدارس': 'school-uniforms.html',
        'يونيفورم': 'school-uniforms.html',
        // Add more general keywords that might lead to specific categories or pages
        'أقمشة': 'fabrics.html',
        'قماش': 'fabrics.html',
        'خدمات': 'services.html',
        'اتصال': 'contact.html',
        'مواعيد': 'contact.html', // If appointments are handled via contact page
        'مقاسات': 'measurements.html' // If you have a measurements page
    };

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (query === '') {
            alert('الرجاء إدخال كلمة للبحث.');
            return;
        }

        let foundMatch = false;

        // Check for direct category/page matches
        for (const keyword in searchableContent) {
            // Check if the keyword includes the query or vice versa for broader matching
            if (keyword.includes(query) || query.includes(keyword)) {
                window.location.href = searchableContent[keyword];
                foundMatch = true;
                break;
            }
        }

        // If no direct match, inform the user and suggest Browse products
        if (!foundMatch) {
            alert('لم يتم العثور على نتائج مطابقة مباشرة. يمكنك تصفح "موديلاتنا" للعثور على ما تبحث عنه.');
            window.location.href = 'products.html'; // Redirect to general products page
        }
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }

    





    // NEW: Authentication Logic (Client-Side Simulation with Modal)
const authButton = document.getElementById('authButton');
const authModal = document.getElementById('authModal');
const closeAuthModalButton = authModal ? authModal.querySelector('.close-button') : null;
const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');
const regNameInput = document.getElementById('regName');
const regEmailInput = document.getElementById('regEmail');
const regPasswordInput = document.getElementById('regPassword');
const regConfirmPasswordInput = document.getElementById('regConfirmPassword');


// Function to check if user is "logged in" (using localStorage for simulation)
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to update the UI based on login status
function updateAuthButtonUI() {
    if (authButton) {
        if (isLoggedIn()) {
            authButton.innerHTML = '<i class="fas fa-user-circle"></i> حسابي'; // Changed icon and text
            authButton.classList.add('logged-in'); // Add class for color change
            authButton.title = 'تم تسجيل الدخول. انقر لتسجيل الخروج.'; // Tooltip
        } else {
            authButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> تسجيل الدخول';
            authButton.classList.remove('logged-in'); // Remove class
            authButton.title = 'انقر لتسجيل الدخول أو إنشاء حساب.'; // Tooltip
        }
    }
}

// Function to open the auth modal
function openAuthModal() {
    if (authModal) {
        authModal.style.display = 'flex'; // Show the modal
        registerMessage.textContent = ''; // Clear previous messages
        registerForm.reset(); // Clear form fields
    }
}

// Function to close the auth modal
function closeAuthModal() {
    if (authModal) {
        authModal.style.display = 'none'; // Hide the modal
    }
}

// Handle auth button click (either open modal or logout)
if (authButton) {
    authButton.addEventListener('click', () => {
        if (isLoggedIn()) {
            // If logged in, perform logout
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('userName'); // Clear stored name
            alert('تم تسجيل الخروج بنجاح.');
            updateAuthButtonUI(); // Update button to "Login" state
        } else {
            // If not logged in, open the registration/login modal
            openAuthModal();
        }
    });
    // Initial UI update when the page loads
    updateAuthButtonUI();
}

// Handle closing the modal
if (closeAuthModalButton) {
    closeAuthModalButton.addEventListener('click', closeAuthModal);
}

// Close modal if user clicks outside of it
if (authModal) {
    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            closeAuthModal();
        }
    });
}

// Handle registration/login form submission
if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = regNameInput.value.trim();
        const email = regEmailInput.value.trim();
        const password = regPasswordInput.value;
        const confirmPassword = regConfirmPasswordInput.value;

        registerMessage.style.color = 'red'; // Default to red for errors

        // Basic client-side validation
        if (!name || !email || !password || !confirmPassword) {
            registerMessage.textContent = 'الرجاء ملء جميع الحقول المطلوبة.';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Simple email regex
            registerMessage.textContent = 'الرجاء إدخال بريد إلكتروني صالح.';
            return;
        }
        if (password.length < 6) {
            registerMessage.textContent = 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.';
            return;
        }
        if (password !== confirmPassword) {
            registerMessage.textContent = 'كلمتا المرور غير متطابقتين.';
            return;
        }

        // --- SIMULATED REGISTRATION/LOGIN ---
        // In a real application, you would send this data to your server
        // for actual registration/login and secure storage.

        // For demonstration, we'll just "log in" the user if validation passes
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name); // Store user's name for display (optional)

        registerMessage.textContent = 'تم إنشاء الحساب وتسجيل الدخول بنجاح!';
        registerMessage.style.color = 'green';
        
        // Give a slight delay before closing modal and updating UI
        setTimeout(() => {
            closeAuthModal();
            updateAuthButtonUI(); // Update the button in the header
            alert(`أهلاً بك، ${name}! تم تسجيل دخولك.`);
        }, 800); // Close after 0.8 seconds
    });
}