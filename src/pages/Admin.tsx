import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Admin = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [deleteReason, setDeleteReason] = useState('');

  const auctions = [
    {
      id: 1,
      title: 'Neon Dreams #001',
      image: '/img/ecb1f265-e13f-460a-a1b3-a0ba233fc406.jpg',
      currentBid: 145000,
      timeLeft: '2ч 15м',
      status: 'active',
      reportCount: 2,
      reports: [
        { reason: 'Нарушение авторских прав', user: 'Анонимный пользователь', date: '2024-01-15' },
        { reason: 'Неприемлемый контент', user: 'Анонимный пользователь', date: '2024-01-16' }
      ]
    },
    {
      id: 2,
      title: 'Cyber Wave #042',
      image: '/img/aa2f584f-2478-4017-b7d9-5fef32a96db1.jpg',
      currentBid: 342000,
      timeLeft: '5ч 42м',
      status: 'active',
      reportCount: 0,
      reports: []
    },
    {
      id: 3,
      title: 'Fire Gradient #025',
      image: '/img/e5a9f986-1567-4c8d-9813-3f36853523c6.jpg',
      currentBid: 192000,
      timeLeft: '1ч 08м',
      status: 'active',
      reportCount: 5,
      reports: [
        { reason: 'Нарушение авторских прав', user: 'Анонимный пользователь', date: '2024-01-14' },
        { reason: 'Копия существующей работы', user: 'Анонимный пользователь', date: '2024-01-15' },
        { reason: 'Неприемлемый контент', user: 'Анонимный пользователь', date: '2024-01-16' },
        { reason: 'Плагиат', user: 'Анонимный пользователь', date: '2024-01-16' },
        { reason: 'Нарушение правил платформы', user: 'Анонимный пользователь', date: '2024-01-17' }
      ]
    }
  ];

  const handleDeleteClick = (auction) => {
    setSelectedAuction(auction);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (!deleteReason.trim()) return;
    
    // Здесь будет логика удаления аукциона
    console.log('Удаляем аукцион:', selectedAuction.id, 'Причина:', deleteReason);
    
    setShowDeleteModal(false);
    setDeleteReason('');
    setSelectedAuction(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'deleted': return 'bg-red-100 text-red-800';
      case 'suspended': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReportColor = (count) => {
    if (count === 0) return 'bg-gray-100 text-gray-800';
    if (count <= 2) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/686bb13c-d4cc-481f-a3eb-73c8f000e03f.png" 
                alt="Dark Forge EP" 
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-xl font-bold text-[#000000]">Dark Forge EP - Админ</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-100 text-red-800">
                <Icon name="Shield" className="w-4 h-4 mr-1" />
                Администратор
              </Badge>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
                <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Панель модерации</h2>
          <p className="text-slate-600">Управление аукционами и обработка жалоб пользователей</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Всего аукционов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">247</div>
              <p className="text-sm text-green-600 mt-1">+12 за сегодня</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Активных</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">189</div>
              <p className="text-sm text-slate-600 mt-1">В данный момент</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Жалобы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">7</div>
              <p className="text-sm text-red-600 mt-1">Требуют внимания</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Удалено</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">15</div>
              <p className="text-sm text-slate-600 mt-1">За последние 7 дней</p>
            </CardContent>
          </Card>
        </div>

        {/* Auctions List */}
        <div className="space-y-6">
          {auctions.map((auction) => (
            <Card key={auction.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={auction.image} 
                      alt={auction.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{auction.title}</h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-slate-500">Статус:</span>
                            <Badge className={getStatusColor(auction.status)}>
                              {auction.status === 'active' ? 'Активный' : 'Неактивный'}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-slate-500">Жалобы:</span>
                            <Badge className={getReportColor(auction.reportCount)}>
                              {auction.reportCount}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-slate-600">
                          <div className="flex items-center space-x-1">
                            <Icon name="DollarSign" className="w-4 h-4" />
                            <span>{auction.currentBid.toLocaleString()} ₽</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" className="w-4 h-4" />
                            <span>{auction.timeLeft}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" className="w-4 h-4 mr-2" />
                          Просмотр
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDeleteClick(auction)}
                        >
                          <Icon name="Trash2" className="w-4 h-4 mr-2" />
                          Удалить
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reports Section */}
                {auction.reports.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="text-sm font-medium text-slate-900 mb-3">Жалобы пользователей:</h4>
                    <div className="space-y-2">
                      {auction.reports.map((report, index) => (
                        <Alert key={index} className="border-yellow-200 bg-yellow-50">
                          <Icon name="AlertTriangle" className="w-4 h-4 text-yellow-600" />
                          <AlertDescription className="text-sm">
                            <span className="font-medium">{report.reason}</span> - 
                            {report.user} ({report.date})
                          </AlertDescription>
                        </Alert>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Delete Modal */}
      <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600">Удаление аукциона</DialogTitle>
            <DialogDescription>
              Вы собираетесь удалить аукцион "{selectedAuction?.title}". Это действие необратимо.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-800">Внимание!</h4>
                  <p className="text-sm text-red-700 mt-1">
                    Аукцион будет немедленно удален, все ставки аннулированы, 
                    а средства возвращены участникам.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deleteReason">Причина удаления *</Label>
              <Textarea
                id="deleteReason"
                placeholder="Укажите причину удаления аукциона..."
                value={deleteReason}
                onChange={(e) => setDeleteReason(e.target.value)}
                className="min-h-[100px]"
              />
              <p className="text-xs text-slate-500">
                Причина будет отправлена создателю аукциона
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowDeleteModal(false)}
              >
                Отмена
              </Button>
              <Button 
                className="flex-1 bg-red-600 hover:bg-red-700"
                onClick={handleDeleteConfirm}
                disabled={!deleteReason.trim()}
              >
                <Icon name="Trash2" className="w-4 h-4 mr-2" />
                Удалить аукцион
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;