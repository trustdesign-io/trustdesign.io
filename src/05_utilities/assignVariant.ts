// import Parse from "parse";

// interface Variant {
//   id: string;
//   url: string;
//   name: string; // Ensuring the name field is included for the variant
// }

// export const assignVariant = async (
//   experimentId: string,
//   groupRatio: number = 0.5
// ): Promise<{ url: string; participationId: string }> => {
//   try {
//     // Step 1: Fetch experiment data to get variant URLs
//     const experimentQuery = new Parse.Query("Experiment");
//     const experiment = await experimentQuery.get(experimentId);
//     const variantsData = experiment.get("variants");

//     if (!variantsData) {
//       console.error("No variants found for this experiment.");
//       throw new Error("No variants found for this experiment.");
//     }

//     // Map variantsData to an array format with id, url, and name
//     const variants: Variant[] = Array.isArray(variantsData)
//       ? variantsData.map((variant: any) => ({
//           id: variant.id,
//           url: variant.url,
//           name: variant.name,
//         }))
//       : Object.entries(variantsData).map(([key, value]: [string, any]) => ({
//           id: key,
//           url: value.url,
//           name: value.name,
//         }));

//     // Step 2: Check if the user already has a participation entry
//     const currentUser = Parse.User.current();
//     if (!currentUser) throw new Error("No current user found");

//     const Participation = Parse.Object.extend("Participation");
//     const participationQuery = new Parse.Query(Participation);

//     participationQuery.equalTo("experimentId", {
//       __type: "Pointer",
//       className: "Experiment",
//       objectId: experimentId,
//     });
//     participationQuery.equalTo("userId", {
//       __type: "Pointer",
//       className: "_User",
//       objectId: currentUser.id,
//     });

//     const existingParticipation = await participationQuery.first();

//     // If the user already has a participation entry, return the assigned variant URL
//     if (existingParticipation) {
//       const existingVariant = existingParticipation.get("variant");
//       if (existingVariant) {
//         console.log("Returning existing variant URL for user.");
//         return {
//           url: existingVariant.url,
//           participationId: existingParticipation.id,
//         };
//       }
//     }

//     // Step 3: Determine variant to assign based on groupRatio
//     const selectedVariant =
//       Math.random() < groupRatio ? variants[0] : variants[1];

//     if (!selectedVariant.url) {
//       throw new Error("Assigned variant URL is undefined or empty.");
//     }

//     // Step 4: Save a new participation entry with the selected variant
//     const participation = new Participation();
//     participation.set("experimentId", {
//       __type: "Pointer",
//       className: "Experiment",
//       objectId: experimentId,
//     });
//     participation.set("userId", {
//       __type: "Pointer",
//       className: "_User",
//       objectId: currentUser.id,
//     });
//     participation.set("variant", {
//       id: selectedVariant.id,
//       url: selectedVariant.url,
//       name: selectedVariant.name, // Include the name field in the variant object
//     });
//     participation.set("dateOfParticipation", new Date());

//     await participation.save();

//     // Step 5: Update the participatedExperiments field in the User table
//     const participatedExperiments =
//       currentUser.get("participatedExperiments") || [];
//     const newParticipation = {
//       experimentId: experimentId,
//       dateOfParticipation: { __type: "Date", iso: new Date().toISOString() },
//     };

//     // Ensure no duplicate entries are added to participatedExperiments
//     const updatedParticipatedExperiments = participatedExperiments.filter(
//       (exp: any) => exp.experimentId !== experimentId
//     );
//     updatedParticipatedExperiments.push(newParticipation);

//     currentUser.set("participatedExperiments", updatedParticipatedExperiments);
//     await currentUser.save();

//     return {
//       url: selectedVariant.url,
//       participationId: participation.id,
//     };
//   } catch (error) {
//     console.error("Error during variant assignment:", error);
//     throw error;
//   }
// };

import Parse from "parse";

interface Variant {
  id: string;
  name: string;
  url: string;
}

export const assignVariant = async (
  experimentId: string,
  groupRatio: number = 0.5
): Promise<{ url: string; participationId: string }> => {
  try {
    // Step 1: Fetch experiment data to get variant URLs
    const experimentQuery = new Parse.Query("Experiment");
    const experiment = await experimentQuery.get(experimentId);
    const variantsData = experiment.get("variants");

    if (!variantsData) {
      console.error("No variants found for this experiment.");
      throw new Error("No variants found for this experiment.");
    }

    // Map variantsData to an array format with id, name, and url
    const variants: Variant[] = Array.isArray(variantsData)
      ? variantsData.map((variant: any) => ({
          id: variant.id,
          name: variant.name,
          url: variant.url,
        }))
      : Object.entries(variantsData).map(([key, value]: [string, any]) => ({
          id: key,
          name: value.name,
          url: value.url,
        }));

    // Step 2: Check if the user already has a participation entry
    const currentUser = Parse.User.current();
    if (!currentUser) throw new Error("No current user found");

    const Participation = Parse.Object.extend("Participation");
    const participationQuery = new Parse.Query(Participation);

    participationQuery.equalTo("experimentId", {
      __type: "Pointer",
      className: "Experiment",
      objectId: experimentId,
    });
    participationQuery.equalTo("userId", {
      __type: "Pointer",
      className: "_User",
      objectId: currentUser.id,
    });

    const existingParticipation = await participationQuery.first();

    // If the user already has a participation entry, return the assigned variant URL
    if (existingParticipation) {
      const existingVariant = existingParticipation.get("variant");
      const assignedVariant = variants.find(
        (variant) => variant.id === existingVariant.id
      );

      if (assignedVariant) {
        console.log("Returning existing variant URL for user.");
        return {
          url: assignedVariant.url,
          participationId: existingParticipation.id,
        };
      }
    }

    // Step 3: Determine variant to assign based on groupRatio
    const randomValue = Math.random();
    const selectedVariant =
      randomValue < groupRatio ? variants[0] : variants[1];

    console.log(
      `Assigning variant based on groupRatio ${groupRatio}: Selected ${selectedVariant.name} with random value ${randomValue}`
    );

    // Step 4: Save a new participation entry with the selected variant
    const participation = new Participation();
    participation.set("experimentId", {
      __type: "Pointer",
      className: "Experiment",
      objectId: experimentId,
    });
    participation.set("userId", {
      __type: "Pointer",
      className: "_User",
      objectId: currentUser.id,
    });
    participation.set("variant", {
      id: selectedVariant.id,
      name: selectedVariant.name,
      url: selectedVariant.url,
    });
    participation.set("groupAssignment", selectedVariant.id);
    participation.set("dateOfParticipation", {
      __type: "Date",
      iso: new Date().toISOString(),
    });

    await participation.save();

    // Step 5: Update participatedExperiments array in the user object
    const participatedExperiments =
      currentUser.get("participatedExperiments") || [];
    participatedExperiments.push({
      experimentId: experimentId,
      dateOfParticipation: { __type: "Date", iso: new Date().toISOString() },
    });
    currentUser.set("participatedExperiments", participatedExperiments);
    await currentUser.save();

    return {
      url: selectedVariant.url,
      participationId: participation.id,
    };
  } catch (error) {
    console.error("Error during variant assignment:", error);
    throw error;
  }
};
