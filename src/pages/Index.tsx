import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ChefHat" size={32} className="text-amber-700" />
              <h1 className="text-2xl font-bold text-amber-900">КондитерПро</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollTo('hero')} className="text-gray-700 hover:text-amber-700 transition-colors">
                Главная
              </button>
              <button onClick={() => scrollTo('products')} className="text-gray-700 hover:text-amber-700 transition-colors">
                Продукция
              </button>
              <button onClick={() => scrollTo('production')} className="text-gray-700 hover:text-amber-700 transition-colors">
                Производство
              </button>
              <button onClick={() => scrollTo('orders')} className="text-gray-700 hover:text-amber-700 transition-colors">
                Заказы
              </button>
              <button onClick={() => scrollTo('contacts')} className="text-gray-700 hover:text-amber-700 transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Свежие десерты для ваших кофеен
                <span className="text-amber-700"> каждый день</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Корпоративный кондитерский цех с многолетним опытом. Поставляем качественные десерты 
                в кофейни по всему городу и изготавливаем эксклюзивные торты для мероприятий.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollTo('products')}
                  className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg"
                >
                  Наша продукция
                </Button>
                <Button 
                  onClick={() => scrollTo('orders')}
                  variant="outline" 
                  className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg"
                >
                  Заказать десерты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl p-8 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-700">15+</div>
                      <div className="text-gray-600">лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-700">50+</div>
                      <div className="text-gray-600">кофеен</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-700">100+</div>
                      <div className="text-gray-600">видов десертов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-700">24/7</div>
                      <div className="text-gray-600">доставка</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наша продукция</h3>
            <p className="text-xl text-gray-600">Широкий ассортимент десертов уже представлен в ваших кофейнях</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Cookie" size={32} className="text-amber-700" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Торты</h4>
                <p className="text-gray-600">Классические и авторские торты для особых случаев</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Coffee" size={32} className="text-amber-700" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Пирожные</h4>
                <p className="text-gray-600">Порционные десерты идеальные к кофе</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Croissant" size={32} className="text-amber-700" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Выпечка</h4>
                <p className="text-gray-600">Свежая выпечка к утреннему кофе</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Dessert" size={32} className="text-amber-700" fallback="Cookie" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Макароны</h4>
                <p className="text-gray-600">Французские макароны разных вкусов</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-amber-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <Icon name="Truck" size={48} className="text-amber-700 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Ежедневные поставки</h4>
                <p className="text-gray-600">Свежие десерты доставляем каждое утро</p>
              </div>
              <div className="text-center">
                <Icon name="Shield" size={48} className="text-amber-700 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Контроль качества</h4>
                <p className="text-gray-600">Строгий отбор ингредиентов и проверка готовой продукции</p>
              </div>
              <div className="text-center">
                <Icon name="Users" size={48} className="text-amber-700 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Персональный менеджер</h4>
                <p className="text-gray-600">Индивидуальный подход к каждому партнеру</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-16 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наше производство</h3>
            <p className="text-xl text-gray-600">Современное оборудование и опытные кондитеры</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Производство 24/7</h4>
                    <p className="text-gray-600">Непрерывный цикл производства для обеспечения свежести продукции</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Thermometer" size={24} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Контроль температуры</h4>
                    <p className="text-gray-600">Соблюдение температурного режима на всех этапах производства</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Сертификация HACCP</h4>
                    <p className="text-gray-600">Система контроля критических точек для безопасности продукции</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Производственные мощности</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Торты в день</span>
                  <span className="font-semibold">до 200 шт</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Пирожные в день</span>
                  <span className="font-semibold">до 1000 шт</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Выпечка в день</span>
                  <span className="font-semibold">до 500 шт</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Время изготовления под заказ</span>
                  <span className="font-semibold">от 24 часов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orders Section */}
      <section id="orders" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Заказы под мероприятия</h3>
            <p className="text-xl text-gray-600">Создаем уникальные десерты для корпоративных событий</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Что мы предлагаем:</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Корпоративные торты с логотипом компании</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Десертные столы для офисных мероприятий</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Индивидуальный дизайн по вашим пожеланиям</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Доставка и сервировка на мероприятии</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h4 className="text-xl font-semibold mb-6">Оставить заявку</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип мероприятия</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Корпоративная вечеринка</option>
                    <option>День рождения компании</option>
                    <option>Презентация продукта</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Количество гостей</label>
                  <input type="number" placeholder="50" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Дата мероприятия</label>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3">
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-xl text-gray-300">Свяжитесь с нами для сотрудничества</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Телефон</h4>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
              <p className="text-gray-300">+7 (495) 123-45-68</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-300">info@konditerpro.ru</p>
              <p className="text-gray-300">orders@konditerpro.ru</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Адрес</h4>
              <p className="text-gray-300">г. Москва, ул. Кондитерская, 15</p>
              <p className="text-gray-300">Производство: 24/7</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">© 2024 КондитерПро. Все права защищены.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;