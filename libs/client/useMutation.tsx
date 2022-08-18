import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: undefined | any;
  error?: undefined | any;
}

export default function useMutation(
  url: string
): [(data: any) => void, UseMutationState] {
  const [state, setState] = useState<UseMutationState>({
    loading: false,
  });

  function mutation(data: any) {
    setState({ ...state, loading: true });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setState({ ...state, data }))
      .catch((error) => setState({ ...state, error }))
      .finally(() => setState({ ...state, loading: false }));
  }

  return [mutation, state];
}
