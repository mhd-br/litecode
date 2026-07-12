// import prettyMs from "pretty-ms";
import { EmptyBorder } from "../border";
import { useTheme } from "../../providers/theme";
import { TextAttributes } from "@opentui/core";

type Props = {
  message: string;
};


export function ErrorMessage({ message }: Props) {
  const { colors } = useTheme();

  return (
    <box width="100%" alignItems="center">
      <box
        // key={`reasoning-${j}`}
        border={["left"]}
        borderColor={colors.error}
        customBorderChars={{
          ...EmptyBorder,
          vertical: "┃",
        }}
        width="100%"
        // paddingX={2}
      >
        <box
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor={colors.surface}
          width="100%"
        >
          <text attributes={TextAttributes.DIM}>
            {message}
          </text>
        </box>
      </box>
    </box>
  );
};