export interface TacticalSymbol {
  id: string;
  name: string;
  description: string;
  category: 'basic' | 'size' | 'type' | 'equipment' | 'control' | 'installation' | 'mobility';
  svg?: string;
  color?: string;
  meaning?: string;
}

export const BASIC_SYMBOLS: TacticalSymbol[] = [
  {
    id: 'friend',
    name: 'Дружній підрозділ',
    description: 'Прямокутник синього кольору',
    category: 'basic',
    color: '#3b82f6',
    meaning: 'Свої війська або союзники'
  },
  {
    id: 'enemy',
    name: 'Ворожий підрозділ',
    description: 'Ромб червоного кольору',
    category: 'basic',
    color: '#ef4444',
    meaning: 'Війська противника'
  },
  {
    id: 'neutral',
    name: 'Нейтральний підрозділ',
    description: 'Квадрат зеленого кольору',
    category: 'basic',
    color: '#22c55e',
    meaning: 'Нейтральні сили'
  },
  {
    id: 'unknown',
    name: 'Невідомий підрозділ',
    description: 'Контур у формі конюшини жовтого кольору',
    category: 'basic',
    color: '#eab308',
    meaning: 'Приналежність не встановлена'
  }
];

export const UNIT_SIZES: TacticalSymbol[] = [
  { id: 'squad', name: 'Відділення', description: 'Одна точка', category: 'size', meaning: 'Squad/Section' },
  { id: 'section', name: 'Секція', description: 'Дві точки', category: 'size', meaning: 'Section' },
  { id: 'platoon', name: 'Взвод', description: 'Три точки', category: 'size', meaning: 'Platoon' },
  { id: 'company', name: 'Рота/Батарея', description: 'Одна вертикальна лінія', category: 'size', meaning: 'Company/Battery' },
  { id: 'battalion', name: 'Батальйон/Дивізіон', description: 'Дві вертикальні лінії', category: 'size', meaning: 'Battalion/Squadron' },
  { id: 'regiment', name: 'Полк', description: 'Три вертикальні лінії', category: 'size', meaning: 'Regiment/Group' },
  { id: 'brigade', name: 'Бригада', description: 'Один крест (X)', category: 'size', meaning: 'Brigade' },
  { id: 'division', name: 'Дивізія', description: 'Два крести (XX)', category: 'size', meaning: 'Division' },
  { id: 'corps', name: 'Корпус', description: 'Три крести (XXX)', category: 'size', meaning: 'Corps' },
  { id: 'army', name: 'Армія', description: 'Чотири крести (XXXX)', category: 'size', meaning: 'Army' },
  { id: 'army-group', name: 'Група армій', description: 'П\'ять крестів (XXXXX)', category: 'size', meaning: 'Army Group' },
  { id: 'installation', name: 'Установа', description: 'Чорний прямокутник зверху', category: 'size', meaning: 'Installation' },
  { id: 'joint-forces', name: 'Об’єднані сили', description: 'Прямокутник з лініями зверху', category: 'size', meaning: 'Joint Forces' }
];

export const UNIT_TYPES: TacticalSymbol[] = [
  { id: 'infantry', name: 'Піхота', description: 'Перехрещені ремені (X)', category: 'type' },
  { id: 'armor', name: 'Танкові війська', description: 'Овал (гусениця)', category: 'type' },
  { id: 'artillery', name: 'Артилерія', description: 'Точка в центрі (гарматне ядро)', category: 'type' },
  { id: 'engineer', name: 'Інженерні війська', description: 'Символ мосту (E-подібний)', category: 'type' },
  { id: 'recon', name: 'Розвідка', description: 'Діагональна лінія', category: 'type' },
  { id: 'signals', name: 'Зв\'язок', description: 'Блискавка', category: 'type' },
  { id: 'medical', name: 'Медична служба', description: 'Хрест', category: 'type' },
  { id: 'anti-tank', name: 'Протитанкові', description: 'Трикутник (кумулятивна воронка)', category: 'type' },
  { id: 'air-defense', name: 'Протиповітряні', description: 'Дуга (парасоля)', category: 'type' },
  { id: 'aviation', name: 'Авіація', description: 'Символ пропелера', category: 'type' },
  { id: 'aviation-fixed', name: 'Армійська авіація (літаки)', description: 'Символ літака (метелик)', category: 'type' },
  { id: 'aviation-rotary', name: 'Армійська авіація (вертольоти)', description: 'Символ вертольота (горизонтальна вісімка)', category: 'type' },
  { id: 'maintenance', name: 'Ремонтні підрозділи', description: 'Гаєчний ключ', category: 'type' },
  { id: 'supply', name: 'Забезпечення', description: 'Горизонтальна лінія', category: 'type' },
  { id: 'mp', name: 'Військова поліція', description: 'Літери MP', category: 'type' },
  { id: 'cbrn', name: 'РХБЗ', description: 'Схрещені реторти', category: 'type' },
  { id: 'ew', name: 'Радіоелектронна боротьба', description: 'Літера W з блискавкою', category: 'type' },
  { id: 'sf', name: 'Сили спеціальних операцій', description: 'Літери SF', category: 'type' },
  { id: 'psyop', name: 'Психологічні операції', description: 'Літери PSYOP', category: 'type' },
  { id: 'civil-affairs', name: 'Цивільно-військове співробітництво', description: 'Літери CA', category: 'type' },
  { id: 'missile', name: 'Ракетні підрозділи', description: 'Символ ракети', category: 'type' },
  { id: 'airborne', name: 'Повітрянодесантні', description: 'Купол парашута', category: 'type' },
  { id: 'air-assault', name: 'Повітряно-штурмові', description: 'Символ V', category: 'type' },
  { id: 'css', name: 'Бойове забезпечення', description: 'Літери CSS', category: 'type' },
  { id: 'transportation', name: 'Транспортні підрозділи', description: 'Колесо вагона', category: 'type' },
  { id: 'intel', name: 'Військова розвідка', description: 'Літери MI', category: 'type' },
  { id: 'self-propelled', name: 'Самохідна артилерія', description: 'Точка з лініями знизу', category: 'type' },
  { id: 'mechanized', name: 'Механізована піхота', description: 'X з овалом', category: 'type' },
  { id: 'rocket', name: 'Ракетна артилерія', description: 'Стрілка вгору з дугою', category: 'type' },
  { id: 'joint-company', name: 'Угрупування ротного рівня', description: 'Прямокутник з лінією зверху', category: 'type' },
  { id: 'joint-battalion', name: 'Угрупування батальйонного рівня', description: 'Прямокутник з двома лініями зверху', category: 'type' },
  { id: 'joint-brigade', name: 'Угрупування бригадного рівня', description: 'Прямокутник з X зверху', category: 'type' }
];

export const EQUIPMENT_SYMBOLS: TacticalSymbol[] = [
  { id: 'tank', name: 'Танк', description: 'Символ танка', category: 'equipment' },
  { id: 'ifv', name: 'БМП', description: 'Бойова машина піхоти', category: 'equipment' },
  { id: 'apc', name: 'БТР', description: 'Бронетранспортер', category: 'equipment' },
  { id: 'howitzer', name: 'Гаубиця', description: 'Артилерійська установка', category: 'equipment' },
  { id: 'mortar', name: 'Міномет', description: 'Символ міномета', category: 'equipment' },
  { id: 'atgw', name: 'ПТКР', description: 'Протитанкова керована ракета', category: 'equipment' },
  { id: 'mlrs', name: 'РСЗВ', description: 'Реактивна система залпового вогню', category: 'equipment' },
  { id: 'sam', name: 'ЗРК', description: 'Зенітно-ракетний комплекс', category: 'equipment' },
  { id: 'flamethrower', name: 'Вогнемет', description: 'Символ вогнемета', category: 'equipment' },
  { id: 'machine-gun', name: 'Кулемет', description: 'Стрілка з перекладиною', category: 'equipment' },
  { id: 'at-launcher', name: 'ПТРК (гранатомет)', description: 'Стрілка з подвійною перекладиною', category: 'equipment' },
  { id: 'sam-missile', name: 'Ракета "земля-повітря"', description: 'Символ ракети в дузі', category: 'equipment' },
  { id: 'light', name: 'Легкий', description: 'Одна вертикальна лінія в прямокутнику', category: 'equipment' },
  { id: 'medium', name: 'Середній', description: 'Дві вертикальні лінії в прямокутнику', category: 'equipment' },
  { id: 'heavy', name: 'Важкий', description: 'Три вертикальні лінії в прямокутнику', category: 'equipment' }
];

export const CONTROL_SYMBOLS: TacticalSymbol[] = [
  { id: 'boundary', name: 'Розмежувальна лінія', description: 'Лінія з позначенням підрозділів', category: 'control' },
  { id: 'axis-main', name: 'Вісь головного удару', description: 'Стрілка з подвійною лінією', category: 'control' },
  { id: 'axis-supp', name: 'Вісь допоміжного удару', description: 'Стрілка з одинарною лінією', category: 'control' },
  { id: 'ambush', name: 'Засідка', description: 'Стрілка з лінією перешкоди', category: 'control' },
  { id: 'block', name: 'Блокувати', description: 'Т-подібний символ на шляху', category: 'control' },
  { id: 'destroy', name: 'Знищити', description: 'Дві стрілки, що перехрещуються на цілі', category: 'control' },
  { id: 'secure', name: 'Закріпитися', description: 'Коло з лінією напрямку', category: 'control' },
  { id: 'seize', name: 'Захопити', description: 'Стрілка, що входить у коло', category: 'control' },
  { id: 'at-ditch', name: 'Протитанковий рів', description: 'Лінія з трикутниками', category: 'control' },
  { id: 'wire', name: 'Дротяна перешкода', description: 'Лінія з хрестиками (X)', category: 'control' },
  { id: 'minefield', name: 'Мінне поле', description: 'Прямокутник з колами (M)', category: 'control' },
  { id: 'feba', name: 'FEBA', description: 'Передній край власних військ', category: 'control' },
  { id: 'feba-planned', name: 'FEBA (планується)', description: 'Пунктирна лінія FEBA', category: 'control' },
  { id: 'flot', name: 'FLOT', description: 'Лінія зіткнення', category: 'control' },
  { id: 'flot-contact', name: 'Лінія бойового зіткнення', description: 'Хвиляста лінія FLOT', category: 'control' },
  { id: 'mine-cluster', name: 'Скупчення мін', description: 'Пунктирне коло з мінами', category: 'control' },
  { id: 'mined-area-large', name: 'Великі заміновані зони', description: 'Замкнена лінія з літерами W', category: 'control' },
  { id: 'mine-anti-lift', name: 'Пристрій на невитягування міни', description: 'Символ міни з гачком', category: 'control' },
  { id: 'minefield-planned', name: 'Плануєме мінне поле', description: 'Пунктирний прямокутник з колами', category: 'control' },
  { id: 'minefield-completed', name: 'Завершене мінне поле', description: 'Суцільний прямокутник з колами', category: 'control' },
  { id: 'mined-area', name: 'Замінований район', description: 'Замкнена лінія з літерами M', category: 'control' },
];

export const INSTALLATION_SYMBOLS: TacticalSymbol[] = [
  { id: 'hospital', name: 'Шпиталь', description: 'Хрест у прямокутнику з чорною позначкою', category: 'installation' },
  { id: 'fuel-point', name: 'Пункт заправки', description: 'Лійка в ромбі', category: 'installation' },
  { id: 'ammo-cache', name: 'Склад боєприпасів', description: 'Символ боєприпасу в ромбі', category: 'installation' },
];

export const MOBILITY_SYMBOLS: TacticalSymbol[] = [
  { id: 'wheeled', name: 'Колісний', description: 'Два кола під лінією', category: 'mobility' },
  { id: 'cross-country', name: 'Всюдихід', description: 'Три кола під лінією', category: 'mobility' },
  { id: 'tracked', name: 'Гусеничний', description: 'Овал під лінією', category: 'mobility' },
  { id: 'amphibious', name: 'Амфібія', description: 'Хвиляста лінія під символом', category: 'mobility' },
  { id: 'railway', name: 'Залізничний', description: 'Два кола з лініями', category: 'mobility' },
  { id: 'barge', name: 'Баржа', description: 'Символ човна', category: 'mobility' }
];
