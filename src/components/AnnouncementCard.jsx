import React from 'react';

export default function AnnouncementCard({ title, content, date, author }) {
  return (
    <div className="bg-surface-container rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{title}</h3>
        <span className="text-label-sm text-on-surface-variant">{date}</span>
      </div>
      <p className="text-body-md text-on-surface-variant">{content}</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbaVlS5vIMotgrFuZqYKufUUcCpEuGasl8ciHbdqaGdVeYla9jfYpfsVIT9dbeq-v1U2yYtAPIHUtsj_nIV7FA3eXfIG8FXw75LA-pornU4X212D8wcwZEAiiKp1FX-8uexdwp_u6Msy0BkOERxoTwmMYiUc41n4GCceDgT3E9Sseplv_O_yzZuIfARZb09JC_y5qGcXTsNzXeEYZlqFOM_jm5fIAfT5TLI04mJcIQ3pui29A6Hvg3w"
            alt="Author avatar"
          />
        </div>
        <span className="text-label-sm text-on-surface-variant">{author}</span>
      </div>
    </div>
  );
}
