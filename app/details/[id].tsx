import { NewsDetailsScreen } from "@features/news-details/screens/NewsDetailsScreen";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const { id } = useLocalSearchParams();
  return <NewsDetailsScreen id={id as string} />;
}
