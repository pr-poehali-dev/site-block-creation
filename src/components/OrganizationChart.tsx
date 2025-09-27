import { Card, CardContent } from '@/components/ui/card';

const OrganizationChart = () => {
  const positions = [
    // Топ-уровень
    {
      id: 1,
      title: 'ДИРЕКТОР КЛИНИКИ',
      level: 1,
      position: 'center',
    },
    {
      id: 2,
      title: 'ЗАМЕСТИТЕЛЬ ДИРЕКТОРА',
      level: 1,
      position: 'left',
    },
    // Второй уровень
    {
      id: 3,
      title: 'АДМИНИСТРАТОРЫ',
      count: 2,
      level: 2,
      position: 'left',
    },
    {
      id: 4,
      title: 'ВРАЧИ СТОМАТОЛОГИ',
      count: 10,
      level: 2,
      position: 'center-left',
    },
    {
      id: 5,
      title: 'БУХГАЛТЕР',
      count: 2,
      level: 2,
      position: 'center-right',
    },
    {
      id: 6,
      title: 'ЗУБОТЕХНИЧЕСКАЯ ЛАБОРАТОРИЯ',
      count: 3,
      level: 2,
      position: 'right',
    },
    // Третий уровень
    {
      id: 7,
      title: 'АССИСТЕНТЫ',
      count: 10,
      level: 3,
      position: 'left',
    },
    {
      id: 8,
      title: 'РЕНТГЕНЛАБОРАНТ',
      count: 1,
      level: 3,
      position: 'center-left',
    },
    {
      id: 9,
      title: 'МЛАДШИЙ МЕДИЦИНСКИЙ ПЕРСОНАЛ',
      count: 3,
      level: 3,
      position: 'center-right',
    },
    {
      id: 10,
      title: 'СТАРШИЙ ТЕХНИК ЗУБНОЙ ТЕХНИК',
      count: 3,
      level: 3,
      position: 'right',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ОРГАНИЗАЦИОННАЯ СТРУКТУРА КЛИНИКИ
          </h2>
          <h3 className="text-2xl text-gray-600 font-medium">
            ООО «ДЕНТАЛ САЛОН»
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Уровень 1 - Директор и Заместитель */}
          <div className="flex justify-center items-center mb-8 gap-4">
            <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-shadow border-0">
              <CardContent className="p-6 text-center min-w-[200px]">
                <h4 className="font-semibold text-sm leading-tight">
                  ЗАМЕСТИТЕЛЬ ДИРЕКТОРА
                </h4>
              </CardContent>
            </Card>
            
            <div className="w-8 h-0.5 bg-blue-300"></div>
            
            <Card className="bg-gray-500 text-white shadow-lg hover:shadow-xl transition-shadow border-0 transform scale-110">
              <CardContent className="p-8 text-center min-w-[240px]">
                <h4 className="font-bold text-lg leading-tight">
                  ДИРЕКТОР КЛИНИКИ
                </h4>
              </CardContent>
            </Card>
          </div>

          {/* Вертикальная линия от директора */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-blue-300"></div>
          </div>

          {/* Горизонтальная линия */}
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-4xl h-0.5 bg-blue-300"></div>
          </div>

          {/* Уровень 2 - Основные отделы */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-blue-300 mb-4"></div>
              <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0 w-full">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-sm leading-tight mb-3">
                    АДМИНИСТРАТОРЫ
                  </h4>
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                    2
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-blue-300 mb-4"></div>
              <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0 w-full">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-sm leading-tight mb-3">
                    ВРАЧИ СТОМАТОЛОГИ
                  </h4>
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                    10
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-blue-300 mb-4"></div>
              <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0 w-full">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-sm leading-tight mb-3">
                    БУХГАЛТЕР
                  </h4>
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                    2
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-blue-300 mb-4"></div>
              <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0 w-full">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-sm leading-tight mb-3">
                    ЗУБОТЕХНИЧЕСКАЯ ЛАБОРАТОРИЯ
                  </h4>
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                    3
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Соединительные линии для уровня 3 */}
          <div className="grid grid-cols-4 gap-6 mb-4">
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-300"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-300"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-300"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-blue-300"></div>
            </div>
          </div>

          {/* Уровень 3 - Подчиненные должности */}
          <div className="grid grid-cols-4 gap-6">
            <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-sm leading-tight mb-3">
                  АССИСТЕНТЫ
                </h4>
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                  10
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-sm leading-tight mb-3">
                  РЕНТГЕНЛАБОРАНТ
                </h4>
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                  1
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-sm leading-tight mb-3">
                  МЛАДШИЙ МЕДИЦИНСКИЙ ПЕРСОНАЛ
                </h4>
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                  3
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-400 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-sm leading-tight mb-3">
                  СТАРШИЙ ТЕХНИК ЗУБНОЙ ТЕХНИК
                </h4>
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto">
                  3
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;