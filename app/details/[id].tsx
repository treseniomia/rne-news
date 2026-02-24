import { NewsDetailsScreen } from "@features/news-details/screens/NewsDetailsScreen";
import { useLocalSearchParams } from "expo-router";

export default function DetailsPage() {
  const { id } = useLocalSearchParams();

  const finalId = Array.isArray(id) ? id.join("/") : id;

  if (!finalId) return null;

  return <NewsDetailsScreen id={finalId} />;
}
