import React from 'react';
import { CircleChevronRight, CircleChevronLeft } from 'lucide-react';
import ChatWindow from './ChatWindow';
import EmptyState from './EmptyState';

const SplitView = ({ messages, isCollapsed, toggleCollapse }) => {
  return (
    <div className="split-view">
      <div className={`chat-section ${isCollapsed ? 'collapsed' : ''}`}>
        <ChatWindow messages={messages} />
      </div>
      <div className="divider" onClick={toggleCollapse}>
        {isCollapsed ? <CircleChevronRight size={24} /> : <CircleChevronLeft size={24} />}
      </div>
      <div className={`empty-state-container ${isCollapsed ? 'hidden' : ''}`}>
        <EmptyState />
      </div>
    </div>
  );
};

export default SplitView;