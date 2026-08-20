import { useState } from 'react';

export default function AnnouncementCard({ title, content, date, author }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-surface-container-low rounded-2xl p-4 mb-4">
      <div className="flex justify-between items-start">
        <h3 className="text-title-sm font-title-sm text-primary">{title}</h3>
        <span className="text-label-sm font-label-sm text-on-surface-variant">{date}</span>
      </div>
      <p className={`text-body-sm font-body-sm text-on-surface-variant mt-2 ${!isExpanded && 'line-clamp-2'}`}>
        {content}
      </p>
      {content.length > 100 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-label-sm font-label-sm text-primary mt-2"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
      <div className="flex items-center mt-4">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbaVlS5vIMotgrFuZqYKufUUcCpEuGasl8ciHbdqaGdVeYla9jfYpfsVIT9dbeq-v1U2yYtAPIHUtsj_nIV7FA3eXfIG8FXw75LA-pornU4X212D8wcwZEAiiKp1FX-8uexdwp_u6Msy0BkOERxoTwmMYiUc41n4GCceDgT3E9Sseplv_O_yzZuIfARZb09JC_y5qGcXTsNzXeEYZlqFOM_jm5fIAfT5TLI04mJcIQ3pui29A6Hvg3w"
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="ml-2 text-label-sm font-label-sm text-on-surface-variant">{author}</span>
      </div>
    </div>
  );
}
