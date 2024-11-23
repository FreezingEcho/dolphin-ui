import "@dolphin-ui/theme/styles/index.css";
export * from "@dolphin-ui/components";

interface Obj {
  name: string;
}
const obj: Obj = {
  name: "123",
};

setTimeout(() => {
  console.log(obj.name);
});
