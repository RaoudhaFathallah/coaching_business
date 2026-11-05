"use client";

import { useEffect, useState } from "react";
import { CoachingPlan, getCoachingPlans } from "@/lib/api";

export function useCoachingPlans() {
  const [plans, setPlans] = useState<CoachingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    getCoachingPlans(controller.signal)
      .then(setPlans)
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.error("Unable to load coaching plans.", error);
          setHasError(true);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return { plans, isLoading, hasError };
}
