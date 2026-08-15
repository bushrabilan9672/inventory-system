import { Button } from "../../../components/ui/button";

export default function SaveSettingsButton({
  onClick,
}) {
  return (
    <div className="flex justify-end">

      <Button
        size="lg"
        onClick={onClick}
      >
        Save Settings
      </Button>

    </div>
  );
}