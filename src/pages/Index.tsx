import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Image" className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-purple-900">EP Platform</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">Аукционы</a>
              <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">Загрузить</a>
              <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">Профиль</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Wallet" className="w-4 h-4 mr-2" />
                Подключить
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              <Icon name="Shield" className="w-3 h-3 mr-1" />
              Анонимная торговля
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Торгуйте цифровыми
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 block mt-2">
                картинками EP
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Платформа для анонимной торговли уникальными цифровыми картинками.
              Высокая скорость, гарантия качества и полная конфиденциальность.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <Icon name="Plus" className="w-5 h-5 mr-2" />
              Загрузить картинку
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3">
              <Icon name="Search" className="w-5 h-5 mr-2" />
              Посмотреть аукционы
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Наши преимущества</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Почему тысячи пользователей выбирают EP Platform для торговли цифровыми картинками
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:border-purple-200 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-slate-900">Анонимность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Торгуйте без раскрытия личных данных. Полная конфиденциальность
                  и защита вашей приватности.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 hover:border-green-200 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">Высокая скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Молниеносная загрузка и обработка изображений. Мгновенные
                  транзакции и уведомления.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-red-100 hover:border-red-200 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-slate-900">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Каждая картинка проходит тщательную модерацию на уникальность
                  и соответствие стандартам качества.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Auctions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Популярные аукционы</h2>
              <p className="text-slate-600">Самые выгодные и горячие лоты прямо сейчас</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder="Поиск по аукционам..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Filter" className="w-4 h-4 mr-2" />
                Фильтры
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Auction Card 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative">
                <img 
                  src="/img/ecb1f265-e13f-460a-a1b3-a0ba233fc406.jpg" 
                  alt="Digital Art" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white">
                  <Icon name="TrendingUp" className="w-3 h-3 mr-1" />
                  Активно
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Neon Dreams #001</CardTitle>
                <CardDescription className="text-slate-600">Абстрактная композиция с неоновыми акцентами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-slate-500">Текущая ставка</p>
                    <p className="text-2xl font-bold text-purple-600">2.4 ETH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Осталось</p>
                    <p className="text-lg font-semibold text-red-600">
                      <Icon name="Clock" className="w-4 h-4 inline mr-1" />
                      2ч 15м
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Icon name="Users" className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-sm text-slate-600">12 ставок</span>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Сделать ставку
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Auction Card 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative">
                <img 
                  src="/img/aa2f584f-2478-4017-b7d9-5fef32a96db1.jpg" 
                  alt="Digital Art" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Icon name="Star" className="w-3 h-3 mr-1" />
                  Топ
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Cyber Wave #042</CardTitle>
                <CardDescription className="text-slate-600">Футуристическая волна с глитч-эффектами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-slate-500">Текущая ставка</p>
                    <p className="text-2xl font-bold text-[#000000] text-left">5.7 ETH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Осталось</p>
                    <p className="text-lg font-semibold text-red-600">
                      <Icon name="Clock" className="w-4 h-4 inline mr-1" />
                      5ч 42м
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Icon name="Users" className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-sm text-slate-600">28 ставок</span>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Сделать ставку
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Auction Card 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative">
                <img 
                  src="/img/e5a9f986-1567-4c8d-9813-3f36853523c6.jpg" 
                  alt="Digital Art" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white">
                  <Icon name="Flame" className="w-3 h-3 mr-1" />
                  Горячо
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">Fire Gradient #025</CardTitle>
                <CardDescription className="text-slate-600">Яркий градиент с геометрическими формами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-slate-500">Текущая ставка</p>
                    <p className="text-2xl font-bold text-purple-600">3.2 ETH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Осталось</p>
                    <p className="text-lg font-semibold text-red-600">
                      <Icon name="Clock" className="w-4 h-4 inline mr-1" />
                      1ч 08м
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Icon name="Users" className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-sm text-slate-600">18 ставок</span>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Сделать ставку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <Icon name="Grid" className="w-5 h-5 mr-2" />
              Посмотреть все аукционы
            </Button>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Загрузите свою картинку</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Создайте свой первый аукцион за несколько минут.
              Комиссия платформы — всего 30% с продажи.
            </p>
          </div>
          
          <Card className="border-2 border-dashed border-purple-200 hover:border-purple-300 transition-colors">
            <CardContent className="p-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="Upload" className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Перетащите файл сюда</h3>
                  <p className="text-slate-600 mb-4">или нажмите для выбора</p>
                  <p className="text-sm text-slate-500">Поддерживаются форматы: PNG, JPG, GIF, SVG</p>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Icon name="FolderOpen" className="w-4 h-4 mr-2" />
                    Выбрать файл
                  </Button>
                  <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                    <Icon name="Camera" className="w-4 h-4 mr-2" />
                    Сделать фото
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="CheckCircle" className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Быстрая модерация</h4>
                <p className="text-sm text-slate-600">Проверка качества и уникальности за 24 часа</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Защита авторства</h4>
                <p className="text-sm text-slate-600">Ваши права защищены блокчейн-технологией</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Максимальная прибыль</h4>
                <p className="text-sm text-slate-600">Получайте 70% от каждой продажи</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Image" className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">EP Platform</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Платформа для анонимной торговли цифровыми картинками
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Twitter" className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Github" className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Комиссии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-slate-400 mb-4">
                Получайте уведомления о новых аукционах
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Ваш email"
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Icon name="Mail" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-800" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 sm:mb-0">
              © 2024 EP Platform. Все права защищены.
            </p>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;