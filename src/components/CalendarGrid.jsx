import React from 'react';

export default function CalendarGrid() {
  return (
    <>
      {/* Days Header */}
      <div className="calendar-grid text-on-surface-variant font-label-sm text-label-sm mb-4">
        <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
      </div>

      {/* Calendar Days */}
      <div className="calendar-grid gap-y-4">
        {/* Row 1 */}
        <div className="flex items-center justify-center">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary-container text-white font-semibold">
            1
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">2</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">3</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">4</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">5</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">6</div>
        <div className="flex items-center justify-center">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold shadow-md shadow-primary/20">
            7
            <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">+2</span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">8</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">9</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">10</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">11</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">12</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">13</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">14</div>

        {/* Row 3 */}
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">15</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">16</div>
        <div className="flex items-center justify-center">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold shadow-md shadow-primary/20">
            17
            <span className="absolute -top-1 -right-1 bg-secondary text-[10px] px-1 rounded-full text-white border-2 border-surface-container-lowest">+2</span>
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">18</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">19</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">20</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">21</div>

        {/* Row 4 */}
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">22</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">23</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">24</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">25</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">26</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">27</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">28</div>

        {/* Row 5 */}
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary-fixed-dim text-primary font-semibold">
            29
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">30</div>
        <div className="w-10 h-10 flex items-center justify-center text-on-surface">31</div>
        <div className="w-10 h-10 flex items-center justify-center text-outline-variant">1</div>
        <div className="w-10 h-10 flex items-center justify-center text-outline-variant">2</div>
        <div className="w-10 h-10 flex items-center justify-center text-outline-variant">3</div>
        <div className="w-10 h-10 flex items-center justify-center text-outline-variant">4</div>
      </div>
    </>
  );
}
