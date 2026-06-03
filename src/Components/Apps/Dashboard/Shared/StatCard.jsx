import React from "react";
import { Card } from "@heroui/react";

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <Card className="bg-[#18181b] border border-white/10 shadow-none py-2 rounded-lg">
      <Card.Content className="flex flex-col gap-4">
        {/* Icon Container */}
        <div className="bg-[#27272a] w-10 h-10 flex items-center justify-center rounded-lg">
          {Icon && <Icon className="text-white/70" size={20} />}
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1">
          <p className="text-tiny text-white/50 font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
      </Card.Content>
    </Card>
  );
};

export default StatCard;
