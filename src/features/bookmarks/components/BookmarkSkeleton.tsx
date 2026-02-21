import { useAppTheme } from "@core/ThemeContext";
import { BaseCard } from "@shared/components/BaseCard";
import { Skeleton } from "@shared/components/Skeleton";
import React from "react";
import { View } from "react-native";

export const BookmarkSkeleton = () => {
  const { theme } = useAppTheme();

  return (
    <View style={{ padding: theme.spacing.md }}>
      {[1, 2, 3].map((key) => (
        <BaseCard key={key}>
          {/* Image Placeholder */}
          <Skeleton width="100%" height={150} />
          <View style={{ marginTop: 12 }}>
            {/* Category Placeholder */}
            <Skeleton width={60} height={12} style={{ marginBottom: 8 }} />
            {/* Title Placeholder */}
            <Skeleton width="90%" height={20} style={{ marginBottom: 8 }} />
            {/* Summary Placeholder */}
            <Skeleton width="100%" height={14} />
          </View>
        </BaseCard>
      ))}
    </View>
  );
};
