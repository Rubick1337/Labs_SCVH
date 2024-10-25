import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: {
        title: "Furniture designed to live in harmony, creating distinctive and timeless spaces",
        discover: "Discover now",
        decorStyleQuestion: "Do you know what is your decor style?",
        ourGoal: "Our Goal",
        goalDescription: "We strive for our clients to be completely satisfied with the quality of our furniture and services. Our goal is to achieve 100% customer satisfaction by offering the best solutions for modern interiors.",
        goalProgress: "Goal progress: {{percentage}}%",
        furniture: "Furniture in our assortment",
        name: "Name",
        description: "Description",
        price: "Price",
        availability: "Availability",
      },
      slider: {
        firstSlide: {
          title: "Web Developer Blog",
          description: "Learn about web development and programming.",
        },
        secondSlide: {
          title: "Learn Programming",
          description: "Start your programming journey today.",
        },
        thirdSlide: {
          title: "Explore Web Technologies",
          description: "Stay updated with the latest web technologies.",
        },
      },
      sectionFurniture: {
        title: "Furniture Collection",
        add: "Add",
        exploreAll: "Explore all furniture",
      },
      reviews: {
        title: "Customer Reviews",
        review1: {
            name: "Alexey",
            text: "Great furniture! Quality is top-notch, I will recommend it to my friends!",
          },
          review2: {
            name: "Marina",
            text: "Fast delivery and excellent service! Thank you for the great work!",
          },
          review3: {
            name: "Ivan",
            text: "Good prices and a large selection. Very satisfied with the purchase.",
          },
      },
      qfa: {
        title: "Q&A",
        materialQuestion: "What materials are used to make the furniture?",
        materialDescription: "We use high-quality materials such as solid wood, MDF, and particle board.",
        warrantyQuestion: "Is there a warranty on your furniture?",
        warrantyDescription: "Yes, all our furniture comes with a 2-year warranty.",
        deliveryQuestion: "How is furniture delivered?",
        deliveryDescription: "Delivery is carried out by our couriers and third-party services.",
        customOrderQuestion: "Can I order custom-sized furniture?",
        customOrderDescription: "Yes, we accept custom orders for furniture to your specifications.",
      },
      furniture: {
        title: "Furniture in our assortment",
        columns: {
          id: "#",
          name: "Name",
          description: "Description",
          price: "Price",
          availability: "Availability",
        },
        items: [
          {
            name: "Chair",
            description: "Comfortable soft chair for the office",
            availability: "In stock",
          },
          {
            name: "Table",
            description: "Large wooden kitchen table",
            availability: "In stock",
          },
          {
            name: "Wardrobe",
            description: "Spacious wardrobe with mirror doors",
            availability: "Out of stock",
          },
          {
            name: "Sofa",
            description: "Corner sofa with a folding mechanism",
            availability: "In stock",
          },
        ],
    },
}
  },
  ru: {
    translation: {
      welcome: {
        title: "Мебель, созданная для жизни в гармонии, создающая отличительные и вечные пространства",
        discover: "Узнать сейчас",
        decorStyleQuestion: "Знаете ли вы, какой у вас стиль декора?",
        ourGoal: "Наша цель",
        goalDescription: "Мы стремимся к тому, чтобы наши клиенты были полностью удовлетворены качеством нашей мебели и услуг. Наша цель — достичь 100% удовлетворенности клиентов, предлагая лучшие решения для современного интерьера.",
        goalProgress: "Прогресс выполнения цели: {{percentage}}%",
        furniture: "Мебель в нашем ассортименте",
        name: "Название",
        description: "Описание",
        price: "Цена",
        availability: "Наличие",
      },
      slider: {
        firstSlide: {
          title: "Блог веб-разработчиков",
          description: "Узнайте о веб-разработке и программировании.",
        },
        secondSlide: {
          title: "Изучение программирования",
          description: "Начните свой путь в программировании сегодня.",
        },
        thirdSlide: {
          title: "Изучите веб-технологии",
          description: "Будьте в курсе последних веб-технологий.",
        },
      },
      sectionFurniture: {
        title: "Коллекция мебели",
        add: "Добавить",
        exploreAll: "Посмотреть всю мебель",
      },
      reviews: {
        title: "Отзывы наших клиентов",
        review1: {
            name: "Алексей",
            text: "Отличная мебель! Качество на высшем уровне, буду рекомендовать друзьям!",
          },
          review2: {
            name: "Марина",
            text: "Быстрая доставка и отличный сервис! Спасибо за отличную работу!",
          },
          review3: {
            name: "Иван",
            text: "Хорошие цены и большой выбор. Очень доволен покупкой.",
          },
      },
      qfa: {
        title: "Вопросы",
        materialQuestion: "Какие материалы используются для изготовления мебели?",
        materialDescription: "Мы используем высококачественные материалы, такие как массив дерева, МДФ и ЛДСП.",
        warrantyQuestion: "Есть ли гарантия на вашу мебель?",
        warrantyDescription: "Да, на всю нашу мебель предоставляется гарантия 2 года.",
        deliveryQuestion: "Как осуществляется доставка мебели?",
        deliveryDescription: "Доставка осуществляется нашими курьерами и сторонними службами.",
        customOrderQuestion: "Могу ли я заказать мебель по индивидуальным размерам?",
        customOrderDescription: "Да, мы принимаем индивидуальные заказы на мебель по вашим размерам.",
      },
      furniture: {
        title: "Мебель в нашем ассортименте",
        columns: {
          id: "#",
          name: "Название",
          description: "Описание",
          price: "Цена",
          availability: "Наличие",
        },
        items: [
          {
            name: "Кресло",
            description: "Удобное мягкое кресло для офиса",
            availability: "В наличии",
          },
          {
            name: "Стол",
            description: "Большой деревянный стол для кухни",
            availability: "В наличии",
          },
          {
            name: "Шкаф",
            description: "Просторный шкаф с зеркальными дверями",
            availability: "Нет в наличии",
          },
          {
            name: "Диван",
            description: "Угловой диван с раскладным механизмом",
            availability: "В наличии",
          },
        ],
      },
    },
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'ru', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
