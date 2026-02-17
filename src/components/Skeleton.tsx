import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";
import { theme } from "../core/theme";

interface SkeletonProps {
  width: number | string;
  height: number | string;
  style?: ViewStyle;
}

export const Skeleton = ({ width, height, style }: SkeletonProps) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          width: width as any,
          height: height as any,
          opacity: opacity,
          backgroundColor: theme.colors.border,
          borderRadius: theme.borderRadius.sm,
        },
        style,
      ]}
    />
  );
};
