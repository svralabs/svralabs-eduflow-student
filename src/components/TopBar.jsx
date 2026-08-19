import { Bell } from 'lucide-react'

export default function TopBar({ name = 'Anna Lane', avatar }) {
  const src =
    avatar ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAsbaVlS5vIMotgrFuZqYKufUUcCpEuGasl8ciHbdqaGdVeYla9jfYpfsVIT9dbeq-v1U2yYtAPIHUtsj_nIV7FA3eXfIG8FXw75LA-pornU4X212D8wcwZEAiiKp1FX-8uexdwp_u6Msy0BkOERxoTwmMYiUc41n4GCceDgT3E9Sseplv_O_yzZuIfARZb09JC_y5qGcXTsNzXeEYZlqFOM_jm5fIAfT5TLI04mJcIQ3pui29A6Hvg3w'
  return (
    <header className="flex justify-between items-center px-container-margin py-4 w-full bg-background">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
          <img className="w-full h-full object-cover" src={src} alt={name} />
        </div>
        <h1 className="text-headline-md-mobile font-bold text-primary">Good morning, {name}!</h1>
      </div>
      <button
        aria-label="Notifications"
        className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors active:scale-95"
      >
        <Bell size={22} className="text-primary" />
      </button>
    </header>
  )
}
