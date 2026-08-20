import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Screen1DashboardHome() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="flex justify-between items-center px-container-margin py-4 w-full bg-background dark:bg-background">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="A warm and professional portrait of a young female student named Anna Lane, featuring soft lighting and a clean, high-key educational setting. The image is bright and modern, aligned with a corporate light-mode aesthetic, using a subtle palette of soft purples and whites. She is smiling approachable towards the camera in a modern learning environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbaVlS5vIMotgrFuZqYKufUUcCpEuGasl8ciHbdqaGdVeYla9jfYpfsVIT9dbeq-v1U2yYtAPIHUtsj_nIV7FA3eXfIG8FXw75LA-pornU4X212D8wcwZEAiiKp1FX-8uexdwp_u6Msy0BkOERxoTwmMYiUc41n4GCceDgT3E9Sseplv_O_yzZuIfARZb09JC_y5qGcXTsNzXeEYZlqFOM_jm5fIAfT5TLI04mJcIQ3pui29A6Hvg3w"/>
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

<div className="bg-primary-container rounded-3xl p-card-padding flex flex-col justify-between aspect-[4/5] relative overflow-hidden group active:scale-[0.98] transition-transform">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-white">star</span>
</div>
</div>
<div>
<h3 className="text-white font-headline-md text-headline-md mb-1">Culture</h3>
<p className="text-on-primary-container text-label-sm font-label-sm opacity-90">Teacher: Dianne Russell</p>
<div className="mt-4 w-8 h-8 rounded-full overflow-hidden border border-white/30">
<img className="w-full h-full object-cover" data-alt="Close-up professional headshot of Dianne Russell, a teacher with a friendly and knowledgeable expression. The lighting is soft and studio-quality, emphasizing a professional yet approachable EdTech aesthetic. The background is a minimalist, slightly blurred office environment with a palette of soft purples and clean whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGDpMQgF7UzYJxe16SDU3ReifMBnxRe0lsEqxwu6NZkCn-z4atIUN8eWV9p0T3-SIx2q9J5mnA08V1U1XTrtT4B9ALceueYjzcnj6oovWIqEOrJWcHtMAveor-FlfVwyXPTnMqNC1ITTKyVMBacwG6DCJKxfZs4-VLZdry2Lyr0VQ7IyYCoZTb1NaaLa_AeYBxCJeqRxX3tMa7nvr6eO1F75De6XCVwiSQ_F54hVaruE9UZyLakc4iIA"/>
</div>
</div>
</div>

<div className="bg-secondary-container rounded-3xl p-card-padding flex flex-col justify-between aspect-[4/5] relative overflow-hidden group active:scale-[0.98] transition-transform">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-white">article</span>
</div>
</div>
<div>
<h3 className="text-white font-headline-md text-headline-md mb-1">History</h3>
<p className="text-on-secondary-container text-label-sm font-label-sm opacity-90">Teacher: Amy Adams</p>
<div className="mt-4 w-8 h-8 rounded-full overflow-hidden border border-white/30">
<img className="w-full h-full object-cover" data-alt="A portrait of teacher Amy Adams, radiating wisdom and enthusiasm in a modern academic setting. The shot uses soft natural lighting to create an inviting atmosphere. The overall style is clean and corporate-modern, utilizing warm coral and white tones to match the subject's theme. High-end photography with shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDX690UKVtjMnIxfuHsXyoyu0YahpRbozwZa8L2UEJ-w44Kd-us7nzFOkN_uoMQiFQrgzH34IhRNR8NpLHwlEkN__KE0aOTGO2Owzitinc3vS8thJugGnqz8HoouWxL_iss7IK3U-uJ4bVnGHp0tUfuM95dlta9mLIrUFb-5jOr2AFAW3gmSw7hlJM5kGH6lrConDdFjk5y3rEVeqtRh2BVRBd6gstkqvBpeRs5Nod42jWWhcbts34Ug"/>
</div>
</div>
</div>

<div className="bg-tertiary-yellow rounded-3xl p-card-padding flex flex-col justify-between aspect-[4/5] relative overflow-hidden group active:scale-[0.98] transition-transform">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-black/5 rounded-full blur-2xl group-hover:bg-black/10 transition-colors"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-on-tertiary-fixed">school</span>
</div>
</div>
<div>
<h3 className="text-on-tertiary-fixed font-headline-md text-headline-md mb-1">Math</h3>
<p className="text-on-tertiary-fixed-variant text-label-sm font-label-sm opacity-80">Teacher: Amy Johnson</p>
<div className="mt-4 w-8 h-8 rounded-full overflow-hidden border border-black/10">
<img className="w-full h-full object-cover" data-alt="Portrait of math teacher Amy Johnson, looking smart and encouraging. She is set against a bright, minimalist modern background that reflects a high-energy educational environment. The lighting is crisp and clear, highlighting a professional corporate look with vibrant yellow and neutral grey accents. Sophisticated and high-quality digital photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAkj09cpe3G8aYPk5yQsRkdwNfWVfjqxaqvI9aeTOv5dLmVUG6hWDGZDm9wpUPvcz8BkJd0W0ZaeYSikeZ6jhDeWXOtw044j2R9X8Hci0Iwlgc53oyO1D1a3wC6fsiPD7TRi4Jojex4hBSR7GUzZ2OsMFvepIk-qu7y5heRkhkV42U9URWuam_4jgVlIjMZwoaWCKgquegE9c7KAWbOCHlR-IHp9XfuwjaOkphNdKOJ-2LxVLa8uOUxQ"/>
</div>
</div>
</div>

<div className="bg-quaternary-green rounded-3xl p-card-padding flex flex-col justify-between aspect-[4/5] relative overflow-hidden group active:scale-[0.98] transition-transform">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-white">menu_book</span>
</div>
</div>
<div>
<h3 className="text-white font-headline-md text-headline-md mb-1">Literature</h3>
<p className="text-white text-label-sm font-label-sm opacity-90">Teacher: Leona Smith</p>
<div className="mt-4 w-8 h-8 rounded-full overflow-hidden border border-white/30">
<img className="w-full h-full object-cover" data-alt="A sophisticated portrait of literature teacher Leona Smith, captured in a bright, airy library or study space. The mood is calm and intellectual, with soft diffused light. The color palette incorporates vibrant greens and clean whites, maintaining a consistent professional EdTech design language. Focused, high-resolution aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_5wHQUOQ-pMI554Xzpo9OLdmYAYyR-baPpVBCqYy4Ay5XRsbOttJ7tmEuJyoZWqqouVsJtCNyGEmXcos8DsqqYNZwloz_DWT8RroHXMtNkh0IY8JQP3Z42Lso-VPgotNBROQx4x8CH5keyl7_WnMx7A-ngmRAqRDeXWrYecP-hXuHLTAFbWT_vovX9Zd82Fw5FjFOywLCBCql73H6TE9PfQb-1Dj942zhZOZ-t5v7bQTjMBtj1Bq_ow"/>
</div>
</div>
</div>
</div>

<div className="mt-4 p-card-padding bg-surface-container-lowest rounded-3xl flex items-center justify-between border border-outline-variant/30">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div>
<h4 className="font-heading-md text-on-surface">Weekly Progress</h4>
<p className="text-label-sm text-text-muted">85% of goals completed</p>
</div>
</div>
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
</main>

<nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-around items-center px-4 py-3 mx-auto max-w-md bg-primary-container dark:bg-primary-container shadow-lg shadow-primary/20 rounded-full w-[90%]">
<a className="flex items-center justify-center bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary rounded-full p-3 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">home</span>
</a>
<a className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 rounded-full transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">menu_book</span>
</a>
<a className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 rounded-full transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">calendar_today</span>
</a>
<a className="flex items-center justify-center text-on-primary-container/70 dark:text-on-primary-container/70 p-3 hover:bg-primary/10 rounded-full transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">person</span>
</a>
</nav>


    </div>
  );
}
