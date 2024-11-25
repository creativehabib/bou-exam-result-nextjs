"use client"
import React from 'react'
import { toast } from "react-toastify"
import { useState, ChangeEvent, FormEvent } from 'react';
import {Download, Loader, Search } from 'lucide-react';

// Define types for the form data
interface FormData {
    student_id: string;
  }
  
  // Define types for the API response data
  interface ResultData {
    program_name: string;
    study_center_name: string;
    student_id: string;
    name_en: string;
    fathers_name_en: string;
    mothers_name_en: string;
    batch: string;
    passing_year: string;
    result: string;
    academic_year: number;
  }
  
  interface ErrorState{
    message: string
  }
  

const FormInput = () => {
  const [formData, setFormData] = useState<FormData>({
    student_id: '',
  });

  // State to store the API response data
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);

  // Handle form input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://result.bou.ac.bd/api/get-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sending form data as JSON
      });

      const data = await response.json(); // Parse the response JSON
      if(data.success == false){
        toast.error(data?.message)
      }else if(data?.success == true ){
        toast.success(data?.message)
      }
      
      if (response.ok) {
        setResult(data?.data);
        setFormData({ student_id: '' });
        
      } else {
        setError(data || 'Something went wrong');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError({ message: error.message });
      } else {
        setError({ message: 'An unexpected error occurred' });
      }
    } finally {
      setLoading(false); // Reset the loading state
    }
  };

  const handleDownload = async () => {
    try {
      const downloadUrl = `https://result.bou.ac.bd/api/transcript/${result?.student_id}/download`;
      window.open(downloadUrl, '_blank');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError({ message: error.message });
      } else {
        setError({ message: 'Failed to initiate download.' });
      }
    }
  };
  return (
    <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Search Your Result</h2>
          <p className="text-sm text-gray-600">Enter your Student ID to view your results</p>
        </div>
        <form className="max-w-md mx-auto mb-8" onSubmit={handleSubmit}>
            <div className="relative ">
              <input
                type="text"
                placeholder="Enter student ID without (-) hyphen"
                className="w-full py-2 px-4 border border-gray-300 dark:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent rounded-md"
                id="student_id"
                name="student_id"
                value={formData?.student_id}
                onChange={handleChange}
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 px-4 bg-gray-700 hover:bg-gray-800 text-white rounded-r-md"
                disabled={loading}
              >
                {loading ? <Loader className="animate-spin h-5 w-5 mr-2" /> : <Search/>}
              </button>
            </div>
            {error && <p className="text-red-500">{error?.message}</p>}
          </form>

          {/* Show Data */}
          {result && (
          <div className="w-full max-w-5xl space-y-6 mx-auto">
            <div>
              <div className="flex justify-end mb-4">
                <button onClick={handleDownload} className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
                  <Download className='mr-2 h-5 w-5'/>
                  <span>Download</span>
                </button>
              </div>
              <div className="bg-white shadow border rounded-lg text-gray-600">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Student Information</h3>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Program:</dt>
                      <dd>{result?.program_name}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Study Center:</dt>
                      <dd>{result?.study_center_name}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Student ID:</dt>
                      <dd>{result?.student_id}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Student Name:</dt>
                      <dd>{result?.name_en}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Fathers Name:</dt>
                      <dd>{result?.fathers_name_en}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Mothers Name:</dt>
                      <dd>{result?.mothers_name_en}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Batch:</dt>
                      <dd>{result?.academic_year}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">Passing Year:</dt>
                      <dd>{result?.passing_year}</dd>
                    </div>
                    <div className="flex justify-between sm:col-span-1">
                      <dt className="font-semibold">GPA:</dt>
                      <dd>{result?.result}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

          <div className="bg-white shadow border rounded-lg mt-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Note</h3>
              <p className="text-sm text-gray-600"> (-)- Waiver, AB- Absent, PR- Problem Related to OMR Sheet fill-up, RP- Expelled in the respective course, WH- Withheld, IC- Incomplete, NA- Not Applicable, X- No Grade Received </p>
            </div>
          </div>
          
        </div>
        )}
    </div>
  )
}

export default FormInput