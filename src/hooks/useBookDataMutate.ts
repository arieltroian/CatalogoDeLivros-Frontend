import axios, { AxiosPromise } from "axios";
import { BookData } from "../interface/BookData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: BookData): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/book", data);
  return response;
};

const updateData = async (data: BookData): AxiosPromise<any> => {
  const response = axios.put(`${API_URL}/book/${data.id}`, data);
  return response;
};

const deleteData = async (id: number): AxiosPromise<any> => {
  const response = axios.delete(`${API_URL}/book/${id}`);
  return response;
};

export function useBookDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["book-data"]);
    },
  });
  return mutate;
}

export function useBookDataUpdate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: updateData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["book-data"]);
    },
  });
  return mutate;
}

export function useBookDataDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["book-data"]);
    },
  });
  return mutate;
}
