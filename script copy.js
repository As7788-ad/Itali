document.addEventListener('DOMContentLoaded', () => {
    // Existing script content (if any, like for active nav link)

    // Product Modal Logic
    const productItems = document.querySelectorAll('.product-item');
    const productModal = document.getElementById('productModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalFabrics = document.getElementById('modalFabrics');

    const productsData = {
        'classic-suit': {
            title: 'البدلة الكلاسيكية',
            image: 'https://images.pexels.com/photos/157675/fashion-men-s-fashion-suit-mancini-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'تعتبر البدلة الكلاسيكية قطعة أساسية في خزانة أي رجل أنيق. نصممها بقصات متقنة تبرز الأناقة والرقي، مع اهتمام بأدق التفاصيل من الخياطة اليدوية للأزرار إلى البطانة الداخلية الفاخرة. مثالية للمناسبات الرسمية، اجتماعات العمل المهمة، وحفلات الزفاف.',
            fabrics: 'الأقمشة المتاحة: صوف إيطالي، مزيج صوف/حرير، فيسكون.'
        },
        'modern-thobe': {
            title: 'الثوب العصري',
            image: 'https://images.pexels.com/photos/6684824/pexels-photo-6684824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'نقدم الثوب العصري بتصاميم تجمع بين الأصالة العربية ولمسات الحداثة. يتميز بقصات مريحة وعملية، مع خيارات متعددة من الياقات والأكمام لتناسب ذوقك الشخصي. مناسب للاستخدام اليومي وللمناسبات الاجتماعية الخفيفة.',
            fabrics: 'الأقمشة المتاحة: قطن مصري، كتان، بوليستر عالي الجودة.'
        },
        'formal-dishdasha': {
            title: 'الدشداشة الرسمية',
            image: 'https://images.pexels.com/photos/17697843/pexels-photo-17697843/free-photo-of-man-in-white-dress-wearing-turban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'الدشداشة الرسمية لدينا تجسد الفخامة والرقي، مصممة بعناية فائقة لتوفير إطلالة مهيبة. نستخدم أقمشة فاخرة تضمن الراحة والمظهر الأنيق. مثالية للمجالس، الاحتفالات الدينية، والمناسبات الكبرى.',
            fabrics: 'الأقمشة المتاحة: صوف خفيف، قطن فاخر، حرير مخلوط.'
        },
        'casual-shirt': {
            title: 'القميص الكاجوال',
            image: 'https://images.pexels.com/photos/9779374/pexels-photo-9779374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'قمصاننا الكاجوال مصممة لتجمع بين الأناقة والراحة، مثالية لإطلالة عصرية يومية. متوفرة بقصات متنوعة وألوان وأنماط جذابة لتناسب جميع الأذواق والمناسبات غير الرسمية.',
            fabrics: 'الأقمشة المتاحة: قطن 100%، كتان، دينيم خفيف، فيسكون.'
        },
        'winter-coat': {
            title: 'المعطف الشتوي',
            image: 'https://images.pexels.com/photos/10188686/pexels-photo-10188686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'نقدم مجموعة فاخرة من المعاطف الشتوية التي تجمع بين الدفء المطلق والأناقة العصرية. مصممة من أجود أنواع الصوف والكشمير، مع تفاصيل تضمن لك إطلالة مميزة ومريحة في الأيام الباردة.',
            fabrics: 'الأقمشة المتاحة: صوف 100%، مزيج صوف/كشمير، تيدي.'
        },
        'wedding-suit': {
            title: 'بدلة الزفاف الفاخرة',
            image: 'https://images.pexels.com/photos/10398686/pexels-photo-10398686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'لأهم يوم في حياتك، نقدم لك بدلة زفاف مصممة خصيصًا لتليق بفخامة المناسبة. تفاصيل دقيقة، خياطة يدوية، واختيار أجود الأقمشة لضمان إطلالة لا تُنسى تعكس شخصيتك الراقية.',
            fabrics: 'الأقمشة المتاحة: صوف فيرجن، حرير/صوف، مخمل.'
        }
    };

    productItems.forEach(item => {
        item.addEventListener('click', () => {
            const modelKey = item.dataset.model;
            const product = productsData[modelKey];

            if (product) {
                modalTitle.textContent = product.title;
                modalImage.src = product.image;
                modalDescription.textContent = product.description;
                modalFabrics.textContent = product.fabrics;
                productModal.style.display = 'flex'; // Use flex to center
            }
        });
    });

    closeButton.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    // Close modal when clicking outside of the content
    window.addEventListener('click', (event) => {
        if (event.target == productModal) {
            productModal.style.display = 'none';
        }
    });

    // Handle active navigation link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure only one is active
        }
    });

    // If on index.html and no specific link is active (e.g., direct access), ensure index is active.
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('.main-nav a[href="index.html"]').classList.add('active');
    }

});

document.addEventListener('DOMContentLoaded', () => {
    // Existing product modal logic (from previous section)
    const productItems = document.querySelectorAll('.product-item');
    const productModal = document.getElementById('productModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalFabrics = document.getElementById('modalFabrics');

    const productsData = {
        'classic-suit': {
            title: 'البدلة الكلاسيكية',
            image: 'https://images.pexels.com/photos/157675/fashion-men-s-fashion-suit-mancini-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'تعتبر البدلة الكلاسيكية قطعة أساسية في خزانة أي رجل أنيق. نصممها بقصات متقنة تبرز الأناقة والرقي، مع اهتمام بأدق التفاصيل من الخياطة اليدوية للأزرار إلى البطانة الداخلية الفاخرة. مثالية للمناسبات الرسمية، اجتماعات العمل المهمة، وحفلات الزفاف.',
            fabrics: 'الأقمشة المتاحة: صوف إيطالي، مزيج صوف/حرير، فيسكون.'
        },
        'modern-thobe': {
            title: 'الثوب العصري',
            image: 'https://images.pexels.com/photos/6684824/pexels-photo-6684824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'نقدم الثوب العصري بتصاميم تجمع بين الأصالة العربية ولمسات الحداثة. يتميز بقصات مريحة وعملية، مع خيارات متعددة من الياقات والأكمام لتناسب ذوقك الشخصي. مناسب للاستخدام اليومي وللمناسبات الاجتماعية الخفيفة.',
            fabrics: 'الأقمشة المتاحة: قطن مصري، كتان، بوليستر عالي الجودة.'
        },
        'formal-dishdasha': {
            title: 'الدشداشة الرسمية',
            image: 'https://images.pexels.com/photos/17697843/pexels-photo-17697843/free-photo-of-man-in-white-dress-wearing-turban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'الدشداشة الرسمية لدينا تجسد الفخامة والرقي، مصممة بعناية فائقة لتوفير إطلالة مهيبة. نستخدم أقمشة فاخرة تضمن الراحة والمظهر الأنيق. مثالية للمجالس، الاحتفالات الدينية، والمناسبات الكبرى.',
            fabrics: 'الأقمشة المتاحة: صوف خفيف، قطن فاخر، حرير مخلوط.'
        },
        'casual-shirt': {
            title: 'القميص الكاجوال',
            image: 'https://images.pexels.com/photos/9779374/pexels-photo-9779374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'قمصاننا الكاجوال مصممة لتجمع بين الأناقة والراحة، مثالية لإطلالة عصرية يومية. متوفرة بقصات متنوعة وألوان وأنماط جذابة لتناسب جميع الأذواق والمناسبات غير الرسمية.',
            fabrics: 'الأقمشة المتاحة: قطن 100%، كتان، دينيم خفيف، فيسكون.'
        },
        'winter-coat': {
            title: 'المعطف الشتوي',
            image: 'https://images.pexels.com/photos/10188686/pexels-photo-10188686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'نقدم مجموعة فاخرة من المعاطف الشتوية التي تجمع بين الدفء المطلق والأناقة العصرية. مصممة من أجود أنواع الصوف والكشمير، مع تفاصيل تضمن لك إطلالة مميزة ومريحة في الأيام الباردة.',
            fabrics: 'الأقمشة المتاحة: صوف 100%، مزيج صوف/كشمير، تيدي.'
        },
        'wedding-suit': {
            title: 'بدلة الزفاف الفاخرة',
            image: 'https://images.pexels.com/photos/10398686/pexels-photo-10398686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: 'لأهم يوم في حياتك، نقدم لك بدلة زفاف مصممة خصيصًا لتليق بفخامة المناسبة. تفاصيل دقيقة، خياطة يدوية، واختيار أجود الأقمشة لضمان إطلالة لا تُنسى تعكس شخصيتك الراقية.',
            fabrics: 'الأقمشة المتاحة: صوف فيرجن، حرير/صوف، مخمل.'
        }
    };

    productItems.forEach(item => {
        item.addEventListener('click', () => {
            const modelKey = item.dataset.model;
            const product = productsData[modelKey];

            if (product) {
                modalTitle.textContent = product.title;
                modalImage.src = product.image;
                modalDescription.textContent = product.description;
                modalFabrics.textContent = product.fabrics;
                productModal.style.display = 'flex'; // Use flex to center
            }
        });
    });

    closeButton.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    // Close modal when clicking outside of the content
    window.addEventListener('click', (event) => {
        if (event.target == productModal) {
            productModal.style.display = 'none';
        }
    });

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');

            // Toggle active class on the question to rotate arrow
            question.classList.toggle('active');

            // Toggle max-height for smooth expand/collapse
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.paddingTop = '15px';
            }
        });
    });


    // Handle active navigation link (updated to handle new pages)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure only one is active
        }
    });

    // If on index.html and no specific link is active (e.g., direct access), ensure index is active.
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('.main-nav a[href="index.html"]').classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Keep existing Product Modal and FAQ Accordion logic here) ...

    // Handle active navigation link (updated again to include measurements.html)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure only one is active
        }
    });

    // If on index.html and no specific link is active (e.g., direct access), ensure index is active.
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('.main-nav a[href="index.html"]').classList.add('active');
    }

    // Measurement Form Submission (Client-side handling only)
    const measurementForm = document.getElementById('measurementForm');
    const formMessage = document.getElementById('formMessage');

    if (measurementForm) {
        measurementForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // Basic Form Validation
            let isValid = true;
            const requiredInputs = measurementForm.querySelectorAll('input[required], textarea[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = ''; // Reset border
                }
            });

            if (!isValid) {
                formMessage.textContent = 'الرجاء ملء جميع الحقول المطلوبة.';
                formMessage.style.color = 'red';
                return;
            }

            // Collect form data
            const formData = new FormData(measurementForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            console.log('Submitted Measurement Data:', data);

            // Simulate saving data (e.g., to local storage or an API)
            // For a real application, you would send this to a server.
            // Example: localStorage.setItem('userMeasurements', JSON.stringify(data));

            formMessage.textContent = 'تم إرسال مقاساتك بنجاح! سنتواصل معك قريباً.';
            formMessage.style.color = 'green';
            measurementForm.reset(); // Clear the form

            // In a real scenario, you'd send this data to your backend
            // fetch('/submit-measurements', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     formMessage.textContent = 'تم إرسال مقاساتك بنجاح! سنتواصل معك قريباً.';
            //     formMessage.style.color = 'green';
            //     measurementForm.reset();
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     formMessage.textContent = 'حدث خطأ أثناء إرسال المقاسات. الرجاء المحاولة مرة أخرى.';
            //     formMessage.style.color = 'red';
            // });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Keep existing Product Modal, FAQ Accordion, and Measurement Form logic here) ...

    // Handle active navigation link (updated one last time)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure only one is active
        }
    });

    // If on index.html and no specific link is active (e.g., direct access), ensure index is active.
    if (currentPath === '' || currentPath === 'index.html') {
        document.querySelector('.main-nav a[href="index.html"]').classList.add('active');
    }

    // Contact Form Validation and Submission (Client-side only)
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

            const emailInput = document.getElementById('contactEmail');
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                isValid = false;
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '';
            }


            if (!isValid) {
                contactFormMessage.textContent = 'الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.';
                contactFormMessage.style.color = 'red';
                return;
            }

            // Simulate form submission
            console.log('Contact Form Submitted:', new FormData(contactForm));
            contactFormMessage.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
            contactFormMessage.style.color = 'green';
            contactForm.reset();
        });
    }

    // Appointment Form Validation and Submission (Client-side only)
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

            // Specific validation for select dropdown
            const appService = document.getElementById('appService');
            if (appService.value === "") {
                isValid = false;
                appService.style.borderColor = 'red';
            } else {
                appService.style.borderColor = '';
            }

            if (!isValid) {
                appointmentFormMessage.textContent = 'الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.';
                appointmentFormMessage.style.color = 'red';
                return;
            }

            // Simulate form submission
            console.log('Appointment Form Submitted:', new FormData(appointmentForm));
            appointmentFormMessage.textContent = 'تم تأكيد حجز موعدك بنجاح! نرحب بك.';
            appointmentFormMessage.style.color = 'green';
            appointmentForm.reset();
        });
    }
});