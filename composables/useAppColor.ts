import { useCssVar } from "@vueuse/core";

const varName = "--project-color";

export default function useAppColor() {
  const bodyEl = ref<HTMLElement | null>(null);
  const value = useCssVar(varName, bodyEl, {
    observe: true,
  });

  onMounted(() => {
    bodyEl.value = document.documentElement;
  });

  const set = (val: string | null) => {
    console.log(val);
    value.value = val;
  };

  return {
    color: value,
    set,
  };
}
