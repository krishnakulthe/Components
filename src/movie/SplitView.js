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
        {isCollapsed ? <CircleChevronLeft size={24} /> : <CircleChevronRight size={24} />}
      </div>
      {!isCollapsed && <EmptyState />}
    </div>
  );
};

export default SplitView;