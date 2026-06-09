import "opentui-spinner/react";
import { useTheme } from "../providers/theme";
import { Mode } from "@litecode/database/enums";

type Props = {
  mode?: Mode;
};

export function Spinner({ mode = Mode.BUILD }: Props) {
  const { colors } = useTheme();
  const activeColor = mode === Mode.PLAN ? colors.planMode : colors.primary;

  return <spinner name="dots7" color={activeColor} />;
};