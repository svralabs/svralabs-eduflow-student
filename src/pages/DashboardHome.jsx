import React from 'react';
import Card from '../components/Card';

const subjects = [
  {
    subject: 'Culture',
    teacher: 'Dianne Russell',
    color: 'primary-container',
    icon: 'star',
    teacherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGDpMQgF7UzYJxe16SDU3ReifMBnxRe0lsEqxwu6NZkCn-z4atIUN8eWV9p0T3-SIx2q9J5mnA08V1U1XTrtT4B9ALceueYjzcnj6oovWIqEOrJWcHtMAveor-FlfVwyXPTnMqNC1ITTKyVMBacwG6DCJKxfZs4-VLZdry2Lyr0VQ7IyYCoZTb1NaaLa_AeYBxCJeqRxX3tMa7nvr6eO1F75De6XCVwiSQ_F54hVaruE9UZyLakc4iIA',
    progress: 75
  },
  {
    subject: 'History',
    teacher: 'Amy Adams',
    color: 'secondary-container',
    icon: 'article',
    teacherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDX690UKVtjMnIxfuHsXyoyu0YahpRbozwZa8L2UEJ-w44Kd-us7nzFOkN_uoMQiFQrgzH34IhRNR8NpLHwlEkN__KE0aOTGO2Owzitinc3vS8thJugGnqz8HoouWxL_iss7IK3U-uJ4bVnGHp0tUfuM95dlta9mLIrUFb-5jOr2AFAW3gmSw7hlJM5kGH6lrConDdFjk5y3rEVeqtRh2BVRBd6gstkqvBpeRs5Nod42jWWhcbts34Ug',
    progress: 60
  },
  {
    subject: 'Math',
    teacher: 'Amy Johnson',
    color: 'tertiary-yellow',
    icon: 'school',
    teacherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAkj09cpe3G8aYPk5yQsRkdwNfWVfjqxaqvI9aeTOv5dLmVUG6hWDGZDm9wpUPvcz8BkJd0W0ZaeYSikeZ6jhDeWXOtw044j2R9X8Hci0Iwlgc53oyO1D1a3wC6fsiPD7TRi4Jojex4hBSR7GUzZ2OsMFvepIk-qu7y5heRkhkV42U9URWuam_4jgVlIjMZwoaWCKgquegE9c7KAWbOCHlR-IHp9XfuwjaOkphNdKOJ-2LxVLa8uOUxQ',
    progress: 85
  },
  {
    subject: 'Literature',
    teacher: 'Emily Carter',
    color: 'quaternary-green',
    icon: 'book',
    teacherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAkj09cpe3G8aYPk5yQsRkdwNfWVfjqxaqvI9aeTOv5dLmVUG6hWDGZDm9wpUPvcz8BkJd0W0ZaeYSikeZ6jhDeWXOtw044j2R9X8Hci0Iwlgc53oyO1D1a3wC6fsiPD7TRi4Jojex4hBSR7GUzZ2OsMFvepIk-qu7y5heRkhkV42U9URWuam_4jgVlIjMZwoaWCKgquegE9c7KAWbOCHlR-IHp9XfuwjaOkphNdKOJ-2LxVLa8uOUxQ',
    progress: 50
  }
];

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <header className="flex justify-between items-center px-container-margin py-4 w-full bg-background dark:bg-background">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbaVlS5vIMotgrFuZqYKufUUcCpEuGasl8ciHbdqaGdVeYla9jfYpfsVIT9dbeq-v1U2yYtAPIHUtsj_nIV7FA3eXfIG8FXw75LA-pornU4X212D8wcwZEAiiKp1FX-8uexdwp_u6Msy0BkOERxoTwmMYiUc41n4GCceDgT3E9Sseplv_O_yzZuIfARZb09JC_y5qGcXTsNzXeEYZlqFOM_jm5fIAfT5TLI04mJcIQ3pui29A6Hvg3w"
              alt="Anna Lane"
            />
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary">Good morning, Anna Lane!</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>
      <main className="px-container-margin">
        <nav className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
          <button className="px-6 py-2.5 rounded-full text-label-sm font-label-sm bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-colors">
            Forum
          </button>
          <button className="px-6 py-2.5 rounded-full text-label-sm font-label-sm bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-colors">
            Add. classes
          </button>
          <button className="px-6 py-2.5 rounded-full text-label-sm font-label-sm active-pill shadow-md shadow-primary/20 transition-all scale-105">
            Lessons
          </button>
        </nav>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              subject={subject.subject}
              teacher={subject.teacher}
              progress={subject.progress}
              color={subject.color}
              icon={subject.icon}
              teacherImage={subject.teacherImage}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
