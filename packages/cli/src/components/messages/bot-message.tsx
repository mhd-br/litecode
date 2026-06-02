// import prettyMs from "pretty-ms";
import { EmptyBorder } from "../border";
import { useTheme } from "../../providers/theme";
// import type { Message } from "../../hooks/use-chat";
// import { Mode, type ModeType } from "@nightcode/shared";
import { TextAttributes } from "@opentui/core";

// type ClientMessagePart = Message["parts"][number];
// type ToolPart = Extract<ClientMessagePart, { type: `tool-${string}` | "dynamic-tool" }>;

type Props = {
  // parts: ClientMessagePart[];
  model: string;
  // mode: ModeType;
  content: string;
  // durationMs?: number;
  // streaming?: boolean;
};

// function formatToolName(name: string): string {
//   return name
//     .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
//     .replace(/^./, (c) => c.toUpperCase());
// };

// function isToolPart(part: ClientMessagePart): part is ToolPart {
//   return part.type === "dynamic-tool" || part.type.startsWith("tool-");
// };

// function formatToolArgs(tc: ToolPart): string {
//   if (!("input" in tc) || tc.input == null) return "";
//   if (typeof tc.input !== "object") return String(tc.input);
//   return Object.values(tc.input).map(String).join(" ");
// }

// type PartGroup = {
//   type: ClientMessagePart["type"];
//   parts: ClientMessagePart[];
//   key: string;
// };

// function groupConsecutiveParts(parts: ClientMessagePart[]): PartGroup[] {
//   const groups: PartGroup[] = [];

//   for (let i = 0; i < parts.length; i++) {
//     const part = parts[i]!;
//     const lastGroup = groups[groups.length - 1];

//      if (lastGroup && lastGroup.type === part.type) {
//       lastGroup.parts.push(part);
//      } else {
//       const key = 
//         isToolPart(part) ? `group-tc-${part.toolCallId}` : `group-${part.type}-${i}`;
//       groups.push({ type: part.type, parts: [part], key });
//      }
//   }

//   return groups;
// };

export function BotMessage({ 
  // parts,
  model,
  content,
  // mode,
  // durationMs,
  // streaming = false,
}: Props) {
  const { colors } = useTheme();
  return (
    <box width="100%" alignItems="center">
      <box paddingY={1} width="100%">
        <box paddingX={3} width="100%">
          <text>{content}</text>
        </box>
      </box>

      <box paddingY={3} paddingBottom={1} gap={1} width="100%">
        <box flexDirection="row" gap={2}>
          <text fg={colors.primary}>&#9673;</text>
          <text>{model}</text>
        </box>
      </box>
    </box>
  );
};